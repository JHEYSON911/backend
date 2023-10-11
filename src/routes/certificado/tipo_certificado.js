const { Router } = require("express");
const tipoCertificadoController = require("../../controllers/certificado/tipo_certificado.js");

const router = new Router();

router.get("/all", tipoCertificadoController.getAll);
router.get("/:id", tipoCertificadoController.getById);
router.post("/", tipoCertificadoController.create);
router.put("/:id", tipoCertificadoController.update);
router.delete("/:id", tipoCertificadoController.destroy);

module.exports = router;
