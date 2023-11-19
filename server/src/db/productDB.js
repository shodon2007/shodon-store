const Database = require(".");

class ProductDB extends Database {
    async getAll(filter) {
        let devices = await this.query(
            `
            SELECT
                d.*,
                JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'title', a.title, 'description', a.description)) AS attributes,
                (
                    SELECT
                        ROUND(AVG(rate),2)
                    FROM
                        review r
                    WHERE
                        r.device_id = d.id
                ) AS rate
            FROM
                device d
            LEFT JOIN
                attribute a ON a.device_id = d.id
            WHERE
                d.price BETWEEN 0 AND 1000000
            GROUP BY
                d.id, d.name;
                `
        );

        devices.forEach((item) => console.log(item.name, item.reviews));
        return devices;

        // return products;
    }
}

module.exports = new ProductDB();
