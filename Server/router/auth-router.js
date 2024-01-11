const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const validators = require("../validators/auth-validators");

router.route("/").get(authcontrollers.home);
router
    .route("/register")
    .post(validate(validators.signupSchema),authcontrollers.register);
router
    .route("/login")
    .post(validate(validators.loginSchema),authcontrollers.login);

module.exports = router;
