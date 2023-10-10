const { DataTypes } = require("sequelize");
const db = require("../../database/connection.js");

const Institucion = db.define(
  "Institucion",
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
  },
);

module.exports = Institucion;
