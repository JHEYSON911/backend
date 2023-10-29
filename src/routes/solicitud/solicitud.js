const { Router } = require("express");
const solicitudController = require("../../controllers/solicitud/solicitud");

const router = new Router();

router.get("/all", solicitudController.getAll);
router.get("/:id", solicitudController.getById);
router.post("/", solicitudController.create);
router.put("/:id", solicitudController.update);
router.delete("/:id", solicitudController.destroy);

module.exports = router;
