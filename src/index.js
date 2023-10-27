require("dotenv").config();
require("./models");

const db = require("./database/connection.js");
const app = require("./app.js");
// const generarData = require("./models/insert_data");

const port = process.env.PORT || 3000;

const main = async () => {
  try {
    await db.authenticate();
    // await db.sync();
    // generarData();
    // await db.sync({ force: true });
    console.log("Conexion exitosa");
    app.listen(port, () => {
      console.log(`Server on port ${port}`);
    });
  } catch (err) {
    console.log(`Ocurrio un error ${err.message}`);
  }
};

main();
