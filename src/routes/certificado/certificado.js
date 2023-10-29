const { Router } = require("express");
const certificadoController = require("../../controllers/certificado/certificado.js");

const router = new Router();

router.get("/all", certificadoController.getAll);
router.get("/:id", certificadoController.getById);
router.post("/upload-doc", certificadoController.pushDocument);
router.post("/", certificadoController.create);
router.put("/:id", certificadoController.update);
router.delete("/:id", certificadoController.destroy);

module.exports = router;
