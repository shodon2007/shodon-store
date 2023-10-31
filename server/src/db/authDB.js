const Database = require("./index.js");
const bcrypt = require("bcryptjs");

class AuthDB extends Database {
    constructor() {
        super();
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
            "INSERT INTO (username, password) VALUES (?, ?)",
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

        return bcrypt.compareSync(password, user.password);
    }
}

module.exports = AuthDB;
