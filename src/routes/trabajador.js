const { Router } = require("express");
const trabajadorController = require("../controllers/trabajador.js");

const router = new Router();

router.get("/all", trabajadorController.getAll);
router.get("/:id", trabajadorController.getById);
router.post("/", trabajadorController.create);
router.put("/:id", trabajadorController.update);
router.delete("/:id", trabajadorController.destroy);

module.exports = router;
