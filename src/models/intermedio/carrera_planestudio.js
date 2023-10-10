const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const CarreraPlanEstudio = db.define(
  "carrera_plan_estudio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    carreraId: {
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

module.exports = CarreraPlanEstudio;
