const express = require("express");
const router = express.Router();
const { verifyToken } = require("../users/auth");
const { getPatientData } = require("./service")

router.use(verifyToken)

router.get("/:patientId", getPatientData)

module.exports = router;