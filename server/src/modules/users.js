const bcrypt = require("bcrypt")
const { DataTypes } = require("sequelize");

const init = (sequelize) => sequelize.define("Users", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    fullName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
}, {underscored: true})

const hashPassword = async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSaltSync(10, "a");
      user.password = bcrypt.hashSync(user.password, salt);
    }
    if (user.email) user.email = user.email.toLocaleLowerCase();
  };
  
  const hooks = (sequelize) => {
    const { Users } = sequelize.models;
  
    Users.beforeCreate(hashPassword);
    Users.beforeUpdate(hashPassword);
  };

  module.exports = { init, hooks }

