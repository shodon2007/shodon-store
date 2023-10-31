const authDB = require("../db/authDB.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = new authDB();

const secret_key = process.env.SECRET_KEY;

const generateAccessToken = (user_id, role) => {
    const payload = {
        id,
        role,
    };

    return jwt.sign(payload, secret_key);
};

class Auth {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const userExists = await auth.checkUserExists(username);
            if (!userExists) {
                return res.status(400).json({
                    message: "Ошибка, пользователь не найден!",
                });
            }

            const validPassword = await auth.checkValidPassword(
                username,
                password
            );

            if (!validPassword) {
                return res.status(400).json({
                    message: "Неправильный пароль :(",
                });
            }

            const token = generateAccessToken();
            res.status(200).json({
                message: `вы успешно вошли`,
                username,
                token: validPassword,
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Ошибка при login на сервере :(",
            });
        }
    }
    async registration(req, res) {
        try {
            const { username, password } = req.body;
            const userExists = await auth.checkUserExists(username);

            if (userExists) {
                return res.status(400).json({
                    message: "Ошибка, такой пользователь уже существует",
                });
            }

            const hashPassword = bcrypt.hashSync(password, 5);
            const registrationResult = auth.registraionUser(
                username,
                hashPassword
            );

            if (!registrationResult) {
                return res.status(500).json({
                    message: "Ошибка при создании пользователя(",
                });
            }

            res.status(200).json({
                message: `вы успешно регистрировались`,
                username,
                token: "token",
            });
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Ошибка при registraiotion на сервере :(",
            });
        }
    }
    async deleteUser(req, res) {}
    async changeRole(req, res) {}
}

module.exports = new Auth();
