const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController.js");

router.get("/:user_id", addressController.getAddress);
router.post("/newaddress", addressController.createAddress);

module.exports = router;
