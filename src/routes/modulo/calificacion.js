const { Router } = require("express");
const calificacionController = require("../../controllers/modulo/calificacion.js");

const router = new Router();

router.get("/all", calificacionController.getAll);
router.get("/:id", calificacionController.getById);
router.post("/", calificacionController.create);
router.put("/:id", calificacionController.update);
router.delete("/:id", calificacionController.destroy);

module.exports = router;
