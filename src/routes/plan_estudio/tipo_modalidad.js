const { Router } = require("express");
const tipoModalidadController = require("../../controllers/plan_estudio/tipo_modalidad.js");

const router = new Router();

router.get("/all", tipoModalidadController.getAll);
router.get("/:id", tipoModalidadController.getById);
router.post("/", tipoModalidadController.create);
router.put("/:id", tipoModalidadController.update);
router.delete("/:id", tipoModalidadController.destroy);

module.exports = router;
