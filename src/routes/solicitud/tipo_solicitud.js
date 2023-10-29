const { Router } = require("express");
const tipoSolicitudController = require("../../controllers/solicitud/tipo_solicitud");

const router = new Router();

router.get("/all", tipoSolicitudController.getAll);
router.get("/:id", tipoSolicitudController.getById);
router.post("/", tipoSolicitudController.create);
router.put("/:id", tipoSolicitudController.update);
router.delete("/:id", tipoSolicitudController.destroy);

module.exports = router;
