const { Router } = require("express");
const tipoItinerarioController = require("../../controllers/plan_estudio/tipo_itinerario.js");

const router = new Router();

router.get("/all", tipoItinerarioController.getAll);
router.get("/:id", tipoItinerarioController.getById);
router.post("/", tipoItinerarioController.create);
router.put("/:id", tipoItinerarioController.update);
router.delete("/:id", tipoItinerarioController.destroy);

module.exports = router;
