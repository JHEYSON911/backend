const { Router } = require("express");
const tipoAuxiliarController = require("../../controllers/certificado/tipo_auxiliar.js");

const router = new Router();

router.get("/all", tipoAuxiliarController.getAll);
router.get("/:id", tipoAuxiliarController.getById);
router.post("/", tipoAuxiliarController.create);
router.put("/:id", tipoAuxiliarController.update);
router.delete("/:id", tipoAuxiliarController.destroy);

module.exports = router;
