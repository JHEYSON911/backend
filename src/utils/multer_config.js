const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, fil, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    console.log(req.body);
    const extension = file.originalname.split(".")[1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

module.exports = storage;
