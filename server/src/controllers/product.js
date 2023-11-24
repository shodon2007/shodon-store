const productDB = require("../db/productDB");

class ProductController {
    async getAll(req, res) {
        const data = await productDB.getAll();

        if (data) {
            return res.status(200).json(data);
        }

        return res.status(400).json({
            message: "Я тут не виновен, это клиент что-то сделал",
        });
    }
    getOne(req, res) {}
}

module.exports = new ProductController();
