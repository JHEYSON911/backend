const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const Certificado = db.define(
  "Certificado",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigoRegistro: {
      type: DataTypes.STRING,
    },
    observaciones: {
      type: DataTypes.STRING,
    },
    fechaEmision: {
      type: DataTypes.STRING,
    },
    urlDocument: {
      type: DataTypes.STRING,
    },
    estado: {
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

module.exports = Certificado;
