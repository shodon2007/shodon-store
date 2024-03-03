const Database = require(".");

class FilterDB extends Database {
    async getFilter(type) {
        let data = await this.query(
            `SELECT DISTINCT attribute.title, attribute.description FROM attribute 
            INNER JOIN device ON attribute.device_id = device.id
            INNER JOIN type ON device.type_id = type.id
            WHERE type.name = ?`,
            type
        );

        console.log(data);

        const newData = {};

        data.forEach((item) => {
            if (item.title in newData) {
                newData[item.title].push(item.description);
            } else {
                newData[item.title] = [item.description];
            }
        });

        return newData;
    }
}

module.exports = new FilterDB();
