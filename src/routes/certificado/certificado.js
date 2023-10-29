const { Router } = require("express");
const multer = require("multer");
const storage = require("../../utils/multer_config");
const upload = multer({ storage: storage });
const certificadoController = require("../../controllers/certificado/certificado.js");

const cloudinary = require("../../utils/cloudinary_config");
require("dotenv").config();

const router = new Router();

router.get("/all", certificadoController.getAll);
router.get("/:id", certificadoController.getById);
router.post(
  "/upload-doc",
  upload.single("certificado"),
  async (req, res, next) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: "home/" + req.file.filename,
      });
      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err, message: err.message });
    }
  },
  //   certificadoController.pushDocument,
);
router.post("/", certificadoController.create);
router.put("/:id", certificadoController.update);
router.delete("/:id", certificadoController.destroy);

module.exports = router;
