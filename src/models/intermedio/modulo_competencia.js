const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const ModuloCompetencia = db.define("modulo_competencia", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  moduloId: {
    type: DataTypes.INTEGER,
  },
  competenciaId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = ModuloCompetencia;
