const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/signin", userController.userLogin);

router.post("/signin/verify", userController.loginVerify);

router.post("/signup", userController.userRegister);

router.post("/signup/verify", userController.registerVerify);

router.get("/logout", userController.userLogout);

module.exports = router;
