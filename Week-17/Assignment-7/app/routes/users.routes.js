const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/user", userController.addUser);

router.get("/user/:id", userController.getUserById);

module.exports = router;
