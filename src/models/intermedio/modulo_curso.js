const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const ModuloCurso = db.define("modulo_curso", {
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
  cursoId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Curso",
      key: "id",
    },
  },
  started: DataTypes.BOOLEAN,
});

module.exports = ModuloCurso;
