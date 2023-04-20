const express = require("express");
const router = express.Router();
const users = require("../controllers/user");

router.route("/login").get(users.login);

module.exports = router;
