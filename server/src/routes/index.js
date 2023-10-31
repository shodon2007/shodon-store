const express = require("express");
const catalogRouter = require("./catalogRouter");
const authRouter = require("./authRouter");

const { Router } = express;

const router = Router();

router.use("/catalog", catalogRouter);
router.use("/auth", authRouter);

module.exports = router;
