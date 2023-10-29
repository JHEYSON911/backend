const { Router } = require("express");
const multer = require("multer");
const storage = require("../../utils/multer_config");
const upload = multer({ storage: storage });
const certificadoController = require("../../controllers/certificado/certificado.js");

const router = new Router();

router.get("/all", certificadoController.getAll);
router.get("/:id", certificadoController.getById);
router.post(
  "/upload-doc",
  upload.single("certificado"),
  (req, res, next) => {
    // console.log(req.file);
  },
  //   certificadoController.pushDocument,
);
router.post("/", certificadoController.create);
router.put("/:id", certificadoController.update);
router.delete("/:id", certificadoController.destroy);

module.exports = router;
