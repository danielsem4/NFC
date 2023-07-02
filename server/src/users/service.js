const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");

const oneDay = 1000 * 60 * 60 * 24;

module.exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, rememberMe } = req.body;
    const user = await Users.findOne({
      where: { email: email.toLocaleLowerCase() },
    });
    if (!user) return res.status(403).send("Forbidden");

    if (bcrypt.compareSync(password, user.password)) {
      const { id, fullName } = user;

      const jwtConfig = rememberMe ? { expiresIn: "24h" } : undefined;
      const maxAge = rememberMe ? oneDay : undefined;

      const token = jwt.sign(
        { id, fullName, email },
        process.env.JWT_KEY,
        jwtConfig
      );
      return res
        .cookie("access_token", token, { httpOnly: true, maxAge })
        .status(200)
        .send("Successfully login");
    }
    return res.status(403).send("Forbidden");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};

module.exports.logout = async (req, res) => {
  try {
    return res
      .clearCookie("access_token")
      .status(200)
      .send("Successfully logged");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
  }
};
