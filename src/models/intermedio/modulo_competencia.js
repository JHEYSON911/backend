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
    references: {
      model: "Modulo",
      key: "id",
    },
  },
  competenciaId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Competencia",
      key: "id",
    },
  },
  started: DataTypes.BOOLEAN,
});

module.exports = ModuloCompetencia;
