const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const validators = require("../validators/auth-validators");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);
router
    .route("/register")
    .post(validate(validators.signupSchema),authcontrollers.register);
router
    .route("/login")
    .post(validate(validators.loginSchema),authcontrollers.login);
router.route("/history").get(authMiddleware,authcontrollers.history);
router.route("/user").get(authMiddleware,authcontrollers.user);
module.exports = router;
