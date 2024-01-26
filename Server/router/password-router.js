const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const pwdcontroller = require("../controllers/password-controller");

router.route("/resetPassword").post(authMiddleware,pwdcontroller.resetPwd);
router.route("/forgotPassword").post(authMiddleware,pwdcontroller.forgotpwd);
router.route("/:token/:email").post(pwdcontroller.forgotPwdemail);

module.exports = router;
