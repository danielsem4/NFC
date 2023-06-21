require("dotenv").config();
const { sequelize } = require("../src/modules");

sequelize.sync({ alter: true }).then(() => console.log("sync done"));
