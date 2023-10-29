const { Router } = require("express");
const carreraController = require("../../controllers/institucion/carrera.js");

const router = new Router();

router.get("/all", carreraController.getAll);
router.get("/:id", carreraController.getById);
router.get("/:id/planes", carreraController.getById);
router.post("/", carreraController.create);
router.put("/:id", carreraController.update);
router.delete("/:id", carreraController.destroy);

module.exports = router;
