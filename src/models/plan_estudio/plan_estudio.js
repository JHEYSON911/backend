const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const PlanEstudio = db.define(
  "PlanEstudio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaInicio: {
      type: DataTypes.STRING,
    },
    fechaFin: {
      type: DataTypes.STRING,
    },
    horasTotales: {
      type: DataTypes.STRING,
    },
    creditosTotales: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = PlanEstudio;
