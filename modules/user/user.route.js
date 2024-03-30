const express = require("express");
const { getUser } = require("./user.controller");
const router = express.Router();

router.get("/", getUser);
module.exports = router;
