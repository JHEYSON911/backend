const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const TipoCertificado = db.define(
  "TipoCertificado",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = TipoCertificado;
