require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const router = require("./routes/index.js");
const errorHandler = require("./error/errorHandler.js");
const checkToken = require("./middlewares/checkToken.js");

const app = express();
const PORT = +(process.env.PORT ?? 9999);

app.use(express.static(path.resolve(__dirname, "static")));
app.use(checkToken);
app.use(cors());
app.use(express.json());
app.use("/api", router);

startServer(PORT);

function startServer(port) {
    try {
        app.listen(port, () => {
            console.log(`Сервер запущен http://localhost:${port}`);
        });
    } catch (e) {
        errorHandler.connectServerError(e);
    }
}
