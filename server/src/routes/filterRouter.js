const Router = require("express");
const controller = require("../controllers/filter");

const router = Router();

router.get("/", controller.getFilter);
// router.post("/", controller.createNewCatalog);

module.exports = router;
