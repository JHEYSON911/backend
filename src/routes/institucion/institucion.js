const { Router } = require("express");
const institucionController = require("../../controllers/institucion/institucion.js");

const router = new Router();

router.get("/all", institucionController.getAll);
router.get("/:id", institucionController.getById);
router.post("/", institucionController.create);
router.put("/:id", institucionController.update);
router.delete("/:id", institucionController.destroy);

module.exports = router;
