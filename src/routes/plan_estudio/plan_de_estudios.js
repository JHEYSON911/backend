const { Router } = require("express");
const planDeEstudiosController = require("../../controllers/plan_estudio/plan_de_estudios.js");

const router = new Router();

router.get("/all", planDeEstudiosController.getAll);
router.get("/:id", planDeEstudiosController.getById);
router.post("/", planDeEstudiosController.create);
router.put("/:id", planDeEstudiosController.update);
router.delete("/:id", planDeEstudiosController.destroy);

module.exports = router;
