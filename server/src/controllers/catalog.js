const db = require("../db/catalogDB");
const jwt = require("jsonwebtoken");

class CatalogController {
    async getCatalog(req, res) {
        try {
            const data = await db.getCatalog();
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({
                message: "Ошибка при получении данных из db",
            });
        }
    }
    async createNewCatalog(req, res) {
        try {
            const decodedToken = jwt.verify(req.token, process.env.SECRET_KEY);

            res.status(200).send("hello world");
        } catch (e) {
            res.status(500).json({ message: "Неизвестная ошибка" });
        }
    }
}

module.exports = new CatalogController();
