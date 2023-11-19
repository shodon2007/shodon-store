const mysql = require("mysql2");
const errorHandler = require("../error/errorHandler");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const conn = mysql.createConnection({
    host,
    user,
    password,
    database,
});

conn.connect(errorHandler.connectDBHandler());

class Database {
    async query(query, ...params) {
        try {
            const [res] = await conn.promise().query(query, params);
            return res;
        } catch (e) {
            const data = await conn.promise().query(query, params);
            console.error("ошибка", data);
            throw new Error("Ошибка в query db", query, e);
        }
    }
}

module.exports = Database;
