const Database = require(".");

class ProductDB extends Database {
    async getAll(type) {
        let devices = await this.query(
            `
            SELECT 
    subquery.*,
    JSON_PARSE(subquery.attributes) AS attributes_parsed,
    subquery.reviews,
    subquery.rate
FROM (
    SELECT
        d.*,
        JSON_ARRAYAGG(JSON_OBJECT('id', a.id, 'title', a.title, 'description', a.description)) AS attributes,
        (
            SELECT
                COUNT(*)
            FROM
                review r
            WHERE
                r.device_id = d.id
        ) AS reviews,
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
        attribute a ON a.devi

                `, type
        );

        return devices;
    }
}

module.exports = new ProductDB();
