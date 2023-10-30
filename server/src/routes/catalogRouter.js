const Router = require("express");
const catalog = require("../controllers/catalog");

const router = Router();

router.get("/", catalog.getCatalog);

module.exports = router;
