const express = require("express");
const { handleSubPage } = require("../controllers/subscribe");

const router = express.Router();

router.get("/", handleSubPage);

module.exports = router;
