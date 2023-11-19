const authDB = require("../db/authDB.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const error = require("../error/errorHandler.js");
const auth = new authDB();

const secret_key = process.env.SECRET_KEY;

const generateAccessToken = (user_id, role) => {
    const payload = {
        user_id,
        role,
    };

    return jwt.sign(payload, secret_key, { expiresIn: "10000h" });
};

class Auth {
    async login(req, res) {
        try {
            const { username, password } = req.query;
            console.log(username, password);
            const userExists = await auth.checkUserExists(username);

            if (!userExists) {
                return error.userNotFound(res);
            }

            const user = await auth.checkValidPassword(username, password);

            if (!user) {
                return error.incorrectPassword(res);
            }

            const token = generateAccessToken(user.id, user.role);

            console.log(token);

            res.status(201).json({
                message: `вы успешно вошли`,
                username,
                token,
            });
        } catch (e) {
            console.log(e);
            error.unknownLoginError(e, res);
        }
    }
    async registration(req, res) {
        try {
            const { username, password } = req.body;
            console.log(username, password);
            const userExists = await auth.checkUserExists(username);

            if (userExists) {
                return error.userExists(res);
            }

            const hashPassword = bcrypt.hashSync(password, 5);
            const registrationResult = auth.registraionUser(
                username,
                hashPassword
            );

            if (!registrationResult) {
                return error.registrationError(res);
            }

            const user = await auth.getUser(username);

            const token = generateAccessToken(user.id, user.role);

            res.status(201).json({
                message: `вы успешно регистрировались`,
                username,
                token,
            });
        } catch (e) {
            console.log("error", e);
            return error.registrationError(res);
        }
    }
    async deleteUser(req, res) {
        try {
            const { user_id } = req.body;

            if (!req.token) {
                return res.status(401).json({
                    message: "Нет токена",
                });
            }

            const decodedToken = jwt.verify(req.token, secret_key);

            if (decodedToken.role < 3) {
                return error.notAccessToDelete(res);
            }

            await auth.deleteUserDB(user_id);

            res.status(200).json({ message: "Все успешно!!" });
        } catch (e) {
            console.log(e);
            return error.deleteUserUnknownError(res);
        }
    }
    async changeRole(req, res) {
        try {
            const { target_id, target_role } = req.body;

            if (!req.token) {
                return res.status(401).json({ message: "Вы не ввели токен" });
            }

            const { role } = jwt.verify(req.token, secret_key);

            if (role < 4 && target_role > 2) {
                return error.notRights(res);
            }

            auth.setRole(target_id, target_role);

            res.status(200).json({
                message: "успешно все",
            });
        } catch (e) {
            console.log(e);
            return error.changeRoleUnknownError(res);
        }
    }
    async changeRassword(req, res) {
        try {
            const { currentPassword, newPassword } = req.body;

            const { user_id } = jwt.verify(req.token, secret_key);

            const correctPassword = await auth.getPassword(
                user_id,
                currentPassword
            );

            if (!correctPassword) {
                return res.status(400).json({ message: "Неправильный пароль" });
            }

            const hashPassword = bcrypt.hashSync(newPassword, 5);

            auth.setNewPassword(hashPassword, user_id);

            res.send("hello baby");
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "неизвестная ошибка" });
        }
    }
}

module.exports = new Auth();
