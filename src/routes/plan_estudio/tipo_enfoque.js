const { Router } = require("express");
const tipoEnfoqueController = require("../../controllers/plan_estudio/tipo_enfoque.js");

const router = new Router();

router.get("/all", tipoEnfoqueController.getAll);
router.get("/:id", tipoEnfoqueController.getById);
router.post("/", tipoEnfoqueController.create);
router.put("/:id", tipoEnfoqueController.update);
router.delete("/:id", tipoEnfoqueController.destroy);

module.exports = router;
