const express = require("express");
const catalogRouter = require("./catalogRouter");

const { Router } = express;

const router = Router();

router.use("/catalog", catalogRouter);

module.exports = router;
