const express = require("express");
const { handleDairyPage } = require("../controllers/dairy");

const router = express.Router();

router.get("/", handleDairyPage);

module.exports = router;
