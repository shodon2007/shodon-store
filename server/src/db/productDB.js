const Database = require(".");
const fs = require("fs");

class ProductDB extends Database {
	async getAll(filters, type) {
        let query = await this.query(`
        SELECT device_id 
        FROM attribute 
        ${Object.keys(filters).length < 1 ? '' : 'WHERE'}
            ${Object.entries(filters).map(([title, descs]) => {
                if (descs.length <=0) {
                    return ''
                }
                return `(title = "${title}" AND description in (${descs.map(desc => `"${desc}"`).join(',')}))`
            }).join(' OR ')}
        `);

		let devices = await this.query(
			`
        SELECT
            d.*,
            JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'title', a.title, 'description', a.description)) AS attributes,
            (
                SELECT COUNT(*)
                FROM review
                WHERE review.device_id = d.id
            ) AS reviews,
            (
                SELECT ROUND(AVG(rate),2)
                FROM review r
                WHERE r.device_id = d.id
            ) AS rate
        FROM device d
        LEFT JOIN attribute a ON a.device_id = d.id
        INNER JOIN type ON d.type_id = type.id
        WHERE 
            type.name = ? 
            ${query.length < 1 ? '' : 'AND'}
            d.id in (${query.map(el => el.device_id).join(' , ')})
        GROUP BY d.id`,
        type);

        console.log(devices);

		devices = devices.map((el) => {
			if (typeof el.attributes === "string") {
				el.attributes = JSON.parse(el.attributes);
			}

			return el;
		});

		return devices;
	}
}

module.exports = new ProductDB();
