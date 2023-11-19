const Database = require("./index.js");
const bcrypt = require("bcryptjs");

class AuthDB extends Database {
    constructor() {
        super();
    }
    async getUser(username) {
        const user = await this.query(
            "select * from user where login = ?",
            username
        );

        return user;
    }
    async checkUserExists(username) {
        const user = await this.query(
            "select * from user where login = ?",
            username
        );
        return user.length !== 0;
    }
    async registraionUser(username, hashPassword) {
        const isSuccess = await this.query(
            "INSERT INTO user (login, password) VALUES (?, ?)",
            username,
            hashPassword
        );

        return isSuccess;
    }

    async checkValidPassword(username, password) {
        const [user] = await this.query(
            "SELECT * FROM user WHERE login = ?",
            username
        );

        return bcrypt.compareSync(password, user.password) ? user : false;
    }
    async deleteUserDB(user_id) {
        return await this.query("delete from user where id = ?", user_id);
    }
    async setRole(target_id, target_role) {
        return await this.query(
            "UPDATE user SET role = ? WHERE id = ?",
            target_role,
            target_id
        );
    }
    async getPassword(user_id, currentPassword) {
        const [{ password }] = await this.query(
            "select password from user where id = ?",
            user_id
        );

        return bcrypt.compareSync(currentPassword, password);
    }
    async setNewPassword(password, id) {
        this.query("UPDATE user SET password = ? WHERE id = ?", password, id);
    }
}

module.exports = AuthDB;
