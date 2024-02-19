const Database = require(".");

class ProductDB extends Database {
    async getAll(type) {
        let devices = await this.query(
            `
            SELECT 
            d.*,
            JSON_PARSE(attributes) AS attributes_parsed,
            reviews,
            rate
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
                attribute a ON a.device_id = d.id
            INNER JOIN
                type ON d.type_id = type.id
            WHERE
                type.name = ?
            GROUP BY
                d.id, d.name
        ) AS subquery;
        

                `, type
        );

        return devices;
    }
}

module.exports = new ProductDB();
