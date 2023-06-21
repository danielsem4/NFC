const express = require("express");
const router = express.Router();
const { verifyToken } = require("./auth");
const { login, logout } = require("./service")

router.post("/login", login);
router.post("/logout", logout);

router.use(verifyToken);

router.get("/", (req, res) => res.json(req.user))

module.exports = router;