function checkToken(req, res, next) {
    if (req.headers["authorization"]) {
        req.token = req.headers["authorization"].slice(7);
    } else {
        req.token = false;
    }
    next();
}

module.exports = checkToken;
