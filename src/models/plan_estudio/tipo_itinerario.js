const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const TipoItinerario = db.define(
  "TipoItinerario",
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

module.exports = TipoItinerario;
