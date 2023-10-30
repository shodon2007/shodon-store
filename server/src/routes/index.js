const express = require("express");
const { Router } = express;

const routers = Router();

routers.use("/", (req, res) => {
    console.log("router working");
    res.send("hello me");
});

module.exports = routers;
