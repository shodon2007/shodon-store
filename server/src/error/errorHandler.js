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
    userNotFound(res) {
        return res.status(400).json({
            message: "Ошибка, пользователь не найден!",
        });
    }
    userExists(res) {
        return res.status(400).json({
            message: "Ошибка, такой пользователь уже существует",
        });
    }
    unknownLoginError(e, res) {
        console.log("Неизвестная ошибка на login,", e);
        res.status(500).json({
            message: "Ошибка при login на сервере :(",
        });
    }
    incorrectPassword(res) {
        return res.status(400).json({
            message: "Неправильный пароль :(",
        });
    }
    registrationError(res) {
        return res.status(500).json({
            message: "Ошибка при создании пользователя(",
        });
    }

    deleteUserUnknownError(res) {
        return res.status(500).json({
            message: "Неизвестная ошибка при удалении пользователь",
        });
    }
    notAccessToDelete(res) {
        return res.status(400).json({
            message: "У тебя нет прав чтобы удалить пользователя :(",
        });
    }
    changeRoleUnknownError(res) {
        return res.status(500).json({
            message: "Неизвестная ошибка при изменении роля :(",
        });
    }
    notRights(res) {
        return res.status(403).json({
            message: "У админа нехватает левела чтобы поднять другого админа )",
        });
    }
}

module.exports = new ErrorHandler();
