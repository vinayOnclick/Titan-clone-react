const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/login", userController.userLogin);

module.exports = router;
