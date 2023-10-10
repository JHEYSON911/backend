const express = require("express");

//  Importando las rutas
const userRoutes = require("./routes/user.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1/user", userRoutes);

module.exports = app;
