const Router = require("express");
const controller = require("../controllers/auth");
const router = Router();

router.get("/", controller.login);
router.post("/", controller.registration);
router.put("/", controller.changeRole);
router.delete("/", controller.deleteUser);
router.patch("/", controller.changeRassword);

module.exports = router;
