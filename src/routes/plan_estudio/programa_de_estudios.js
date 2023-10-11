const { Router } = require("express");
const programaDeEstudiosController = require("../../controllers/plan_estudio/programa_de_estudios.js");

const router = new Router();

router.get("/all", programaDeEstudiosController.getAll);
router.get("/:id", programaDeEstudiosController.getById);
router.post("/", programaDeEstudiosController.create);
router.put("/:id", programaDeEstudiosController.update);
router.delete("/:id", programaDeEstudiosController.destroy);

module.exports = router;
