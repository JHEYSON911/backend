const { Router } = require("express");
const indicadorLogroController = require("../../controllers/modulo/indicador_logro.js");

const router = new Router();

router.get("/all", indicadorLogroController.getAll);
router.get("/:id", indicadorLogroController.getById);
router.post("/", indicadorLogroController.create);
router.put("/:id", indicadorLogroController.update);
router.delete("/:id", indicadorLogroController.destroy);

module.exports = router;
