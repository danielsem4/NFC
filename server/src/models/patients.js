const { DataTypes, Model } = require("sequelize");

const init = (sequelize) =>
  sequelize.define(
    "Patients",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: DataTypes.STRING,
      zehutNumber: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    { underscored: true }
  );

module.exports = { init };
