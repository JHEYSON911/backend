const { Router } = require("express");
const competenciaController = require("../../controllers/modulo/competencia.js");

const router = new Router();

router.get("/all", competenciaController.getAll);
router.get("/:id", competenciaController.getById);
router.post("/", competenciaController.create);
router.put("/:id", competenciaController.update);
router.delete("/:id", competenciaController.destroy);

module.exports = router;
