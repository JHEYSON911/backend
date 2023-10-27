const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const CarreraPlanEstudio = db.define("carrera_plan_estudio", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  carreraId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Carrera",
      key: "id",
    },
  },
  planEstudioId: {
    type: DataTypes.INTEGER,
    references: {
      model: "PlanEstudio",
      key: "id",
    },
  },
  started: DataTypes.BOOLEAN,
});

module.exports = CarreraPlanEstudio;
