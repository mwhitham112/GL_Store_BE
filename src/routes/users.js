const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController.js");

router.get("/", usersController.getUsers);
router.get("/:userID", usersController.getUserByID);
router.post("/newuser", usersController.createUser);

module.exports = router;
