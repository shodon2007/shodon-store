"use strict";
var _a;
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 9999);
app.get("/", (req, res) => {
    res.send("hello world express + ?typescrpt");
});
startServer(PORT);
function startServer(port) {
    try {
        app.listen(port, () => {
            console.log(`Сервер запущен http://localhost:${port}`);
        });
    }
    catch (e) {
        throw new Error("Ошибка при запуске сервера");
    }
}
