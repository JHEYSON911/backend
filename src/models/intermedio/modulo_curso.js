const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const ModuloCurso = db.define(
  "modulo_curso",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    moduloId: {
      type: DataTypes.INTEGER,
    },
    cursoId: {
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

module.exports = ModuloCurso;
