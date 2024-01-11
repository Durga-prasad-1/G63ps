const express = require("express");
const router = express.Router();
const resetcontrol = require("../controllers/reset-controller");

router.route("/resetpassword").post(resetcontrol);

module.exports = router;