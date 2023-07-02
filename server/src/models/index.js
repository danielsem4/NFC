const Sequelize = require("sequelize");
const users = require("./users");
const patients = require("./patients");


const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    }
  );

  users.init(sequelize)
  patients.init(sequelize)

  users.hooks(sequelize)

module.exports = { sequelize, ...sequelize.models };
