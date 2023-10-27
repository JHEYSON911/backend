const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const PlanModulo = db.define("plan_estudio_modulo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  planEstudioId: {
    type: DataTypes.INTEGER,
    references: {
      model: "PlanEstudio",
      key: "id",
    },
  },
  moduloId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Modulo",
      key: "id",
    },
  },
  started: DataTypes.BOOLEAN,
});

module.exports = PlanModulo;
