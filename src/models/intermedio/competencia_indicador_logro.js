const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const CompetenciaIndicador = db.define("competencia_indicador_logro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  competenciaId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Competencia",
      key: "id",
    },
  },
  indicadorId: {
    type: DataTypes.INTEGER,
    references: {
      model: "IndicadorLogro",
      key: "id",
    },
  },
  started: DataTypes.BOOLEAN,
});

module.exports = CompetenciaIndicador;
