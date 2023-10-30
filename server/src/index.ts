require("dotenv").config();
const express = require("express");

const app = express();
const PORT: number = +(process.env.PORT ?? 9999);

app.get("/", (req: any, res: any) => {
    res.send("hello world express + ?typescrpt");
});

startServer(PORT);

function startServer(port: number) {
    try {
        app.listen(port, () => {
            console.log(`Сервер запущен http://localhost:${port}`);
        });
    } catch (e: any) {
        throw new Error("Ошибка при запуске сервера");
    }
}
