const express = require("express");
const {
  handleHomePage,
  handleLogin,
  handleSignUp,
} = require("../controllers/redirect");

const router = express.Router();

router.get("/login", handleLogin);
router.get("/signup", handleSignUp);
router.get("/", handleHomePage);

module.exports = router;
