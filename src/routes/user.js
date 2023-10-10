const { Router } = require("express");
const userController = require("../controllers/user.js");

const router = new Router();

router.get("/all", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
