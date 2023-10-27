const { Router } = require("express");
const estudianteController = require("../controllers/estudiante.js");

const router = new Router();

router.get("/all", estudianteController.getAll);
router.delete("/:id/certificates", estudianteController.getCertificatesByCode);
router.get("/:id", estudianteController.getById);
router.post("/", estudianteController.create);
router.put("/:id", estudianteController.update);
router.delete("/:id", estudianteController.destroy);

module.exports = router;
