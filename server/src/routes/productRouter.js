const Router = require("express");
const controller = require("../controllers/product");

const router = Router();

router.get("/all", controller.getAll);
router.get("/", controller.getOne);

module.exports = router;
