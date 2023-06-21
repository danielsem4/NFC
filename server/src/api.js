const express = require("express");
const router = express.Router();
const patients = require("./patients/routes")
const users = require("./users/routes");

router.use("/users", users);
router.use("/patients", patients);

module.exports = router;