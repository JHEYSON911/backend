const { Router } = require("express");
const planEstudioController = require("../../controllers/plan_estudio/plan_estudio.js");

const router = new Router();

router.get("/all", planEstudioController.getAll);
router.get("/:id", planEstudioController.getById);
router.get("/:id/modulos", planEstudioController.getModulsByPlanId);
router.post("/", planEstudioController.create);
router.put("/:id", planEstudioController.update);
router.delete("/:id", planEstudioController.destroy);

module.exports = router;
