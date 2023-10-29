const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) throw new Error(err);
      const { id, username, rol, nombre, email } = jwt.decode(token);
      req.id = id;
      req.username = username;
      req.rol = rol;
      req.email = email;
      req.nombre = nombre;
      next();
    });
  } catch (err) {
    return res.status(403).send({ error: err.message });
  }
};

module.exports = validateToken;
