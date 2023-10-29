const { Router } = require("express");
const solicitudController = require("../../controllers/solicitud/solicitud");
const validateToken = require("../../middlewares/validate_token");

const router = new Router();

router.get("/all", solicitudController.getAll);
router.get("/:id", solicitudController.getById);
router.post("/", validateToken, solicitudController.create);
router.put("/:id", solicitudController.update);
router.delete("/:id", solicitudController.destroy);

module.exports = router;
