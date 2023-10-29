const { Router } = require("express");
const moduloController = require("../../controllers/modulo/modulo.js");

const router = new Router();

router.get("/all", moduloController.getAll);
router.get("/:id", moduloController.getById);
router.get("/:id/cursos", moduloController.getCoursesByModulId);
router.post("/", moduloController.create);
router.put("/:id", moduloController.update);
router.delete("/:id", moduloController.destroy);

module.exports = router;
