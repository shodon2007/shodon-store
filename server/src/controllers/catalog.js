const database = require("../db/index");

class Catalog {
    async getCatalog(req, res) {
        let data = [];
        try {
            data = await database.getCatalog();
        } catch (e) {
            res.status(500).json({
                message: "Ошибка при получении данных из db",
            });
        }
        res.status(200).json(data);
    }
    async postCatalog(req, res) {
        console.log(req.headers);
        res.status(200).send("hello world");
    }
}

module.exports = new Catalog();
