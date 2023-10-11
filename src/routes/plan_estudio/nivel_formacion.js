const { Router } = require("express");
const nivelFormacionController = require("../../controllers/plan_estudio/nivel_formacion.js");

const router = new Router();

router.get("/all", nivelFormacionController.getAll);
router.get("/:id", nivelFormacionController.getById);
router.post("/", nivelFormacionController.create);
router.put("/:id", nivelFormacionController.update);
router.delete("/:id", nivelFormacionController.destroy);

module.exports = router;
