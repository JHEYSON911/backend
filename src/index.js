require("dotenv").config();
const db = require("./database/connection.js");
const app = require("./app.js");

const port = process.env.PORT || 3000;

const main = async () => {
  try {
    await db.authenticate();
    console.log("Conexion exitosa");
    app.listen(port, () => {
      console.log(`Server on port ${port}`);
    });
  } catch (err) {
    console.log(`Ocurrio un error ${err.message}`);
  }
};

main();
