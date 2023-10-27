const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const EstudiantePlanEstudio = db.define("estudiante_plan_estudio", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  estudianteId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Estudiante",
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

module.exports = EstudiantePlanEstudio;
