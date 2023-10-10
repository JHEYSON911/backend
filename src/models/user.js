const { DataTypes } = require("sequelize");
const db = require("../database/connection.js");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
    nombreCompleto: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = User;
