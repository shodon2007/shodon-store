const express = require("express");
const catalogRouter = require("./catalogRouter");
const authRouter = require("./authRouter");
const filterRouter = require("./filterRouter");
const productRouter = require("./productRouter");
const { Router } = express;

const router = Router();

router.use("/catalog", catalogRouter);
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/filter", filterRouter);

module.exports = router;
