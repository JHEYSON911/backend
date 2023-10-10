const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const Solicitud = db.define(
  "Solicitud",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    asunto: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = Solicitud;
