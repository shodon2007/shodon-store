class ErrorHandler {
    connectDBHandler(e) {
        if (e) {
            throw new Error("Ошбика при подлючении к серверу,", e);
        }
        console.log("Успешно подключено к Базе данных");
    }
}

module.exports = new ErrorHandler();
