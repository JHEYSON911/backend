const { config } = require("dotenv");
const cloudinary = require("cloudinary").v2;
config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLAVE_API,
  api_secret: process.env.SECRET_API,
});

module.exports = cloudinary;
