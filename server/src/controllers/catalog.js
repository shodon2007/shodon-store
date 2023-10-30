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
}

module.exports = new Catalog();
