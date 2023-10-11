const { Router } = require("express");
const cursoController = require("../../controllers/modulo/curso.js");

const router = new Router();

router.get("/all", cursoController.getAll);
router.get("/:id", cursoController.getById);
router.post("/", cursoController.create);
router.put("/:id", cursoController.update);
router.delete("/:id", cursoController.destroy);

module.exports = router;
