const filterDB = require("../db/filterDB");

class FilterController {
    async getFilter(req, res) {
        const { type } = req.query;

        const filter = await filterDB.getFilter(type);
        return res.status(200).json(filter);
    }
}

module.exports = new FilterController();
