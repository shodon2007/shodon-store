const database = require("../db/index");

class Catalog {
    async getCatalog(req, res) {
        res.send("hello baby");
    }
}

module.exports = new Catalog();
