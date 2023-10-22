const { Router } = require("express");
const authController = require("../controllers/auth");

const router = new Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgotpassword", authController.forgotPassword);
router.post("/forgotpassword/validate", authController.validateCodeRecovery);
router.post("/forgotpassword/change", authController.changePassword);

module.exports = router;
