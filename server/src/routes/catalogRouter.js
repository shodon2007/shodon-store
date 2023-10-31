const Router = require("express");
const controller = require("../controllers/catalog");

const router = Router();

router.get("/", controller.getCatalog);
router.post("/", controller.postCatalog);

module.exports = router;
