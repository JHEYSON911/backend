const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const PlanModulo = db.define(
  "plan_estudio_modulo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    planEstudioId: {
      type: DataTypes.INTEGER,
    },
    moduloId: {
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

module.exports = PlanModulo;
