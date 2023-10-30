class ErrorHandler {
    connectDBHandler(e) {
        if (e) {
            throw new Error("Ошбика при подлючении к серверу,", e);
        }
        console.log("Успешно подключено к Базе данных");
    }
    connectServerError(e) {
        throw new Error("Ошибка при запуске Сервера");
    }
}

module.exports = new ErrorHandler();
