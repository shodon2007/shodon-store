const Database = require(".");
const fs = require('fs');
const path = require('path');

const productSql = fs.readFileSync(path.resolve(__dirname, 'product.sql'), 'utf-8');

class ProductDB extends Database {
    async getAll(filters, type) {
        let devices = await this.query(productSql, type);

        devices = devices.map(el => {
            if (typeof el.attributes === 'string') {
                el.attributes = JSON.parse(el.attributes);
            }
            return el;
        });

        return devices;
    }
}

module.exports = new ProductDB();
