const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const CompetenciaIndicador = db.define(
  "competencia_indicador_logro",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    competenciaId: {
      type: DataTypes.INTEGER,
    },
    indicadorId: {
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

module.exports = CompetenciaIndicador;
