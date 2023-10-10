const { DataTypes } = require("sequelize");
const db = require("../database/connection.js");

const Trabajador = db.define(
  "Trabajador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cargo: {
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

module.exports = Trabajador;
