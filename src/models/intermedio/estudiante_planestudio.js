const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const EstudiantePlanEstudio = db.define(
  "estudiante_plan_estudio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estudianteId: {
      type: DataTypes.INTEGER,
    },
    planEstudioId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = EstudiantePlanEstudio;
