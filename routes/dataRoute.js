const express = require("express");
const router = express.Router();
const controller = require("../controller/dataController");

router.get("/users", controller.getAllUsers);
router.post("/add/user", controller.addUser);

module.exports = router;
