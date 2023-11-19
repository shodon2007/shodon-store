const Database = require(".");

class CatalogDB extends Database {
    async getCatalog() {
        return this.query("SELECT * FROM type");
    }
}

module.exports = new CatalogDB();
