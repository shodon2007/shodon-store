const Database = require(".");
const fs = require("fs");

class ProductDB extends Database {
	async getAll(filters, type) {
        const sort = filters.sort[0] ?? 'datedesc'; 
        delete filters.sort;

        const sortingQueries = {
            'datedesc': 'd.id DESC',
            'dateasc': 'd.id ASC',
            'pricedesc': 'd.price DESC',
            'priceasc': 'd.price ASC',
            'name': 'd.name ASC',
        }

        console.log(sortingQueries[sort])

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
         GROUP BY d.id
         ORDER BY ${sortingQueries[sort] ?? 'd.name DESC'}
         `,
        type);

		devices = devices.map((el) => {
			if (typeof el.attributes === "string") {
				el.attributes = JSON.parse(el.attributes);
			}

			return el;
		});

        devices = devices.filter(device => {
            for(let i in filters) {
                const findAttributes = device.attributes.find(attribute => attribute.title === i && filters[i].includes(attribute.description));

                if (!findAttributes || findAttributes.length < 1) {
                    return false;
                }

                // for (let attribute of device.attributes) {
                //     if (attribute.title === i && !filters[i].includes(attribute.description)) {
                //         return false;
                //     }
                // }
            }

            return true;
        })

		return devices;
	}
}

module.exports = new ProductDB();
