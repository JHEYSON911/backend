const { Router } = require("express");
const estudianteController = require("../controllers/estudiante.js");

const router = new Router();

router.get("/all", estudianteController.getAll);
router.get("/:code/certificados", estudianteController.getCertificatesByCode);
router.get("/:code/solicitudes", estudianteController.getRequestsByCode);
router.get(
  "/:code/calificaciones",
  estudianteController.getCalificationsByStudentCode,
);
router.get("/:id", estudianteController.getById);
router.post("/", estudianteController.create);
router.put("/:id", estudianteController.update);
router.delete("/:id", estudianteController.destroy);

module.exports = router;
