const express = require("express");
const router = express.Router();
const pred_controller = require("../controllers/predict-controller");


router.route("/prediction").post(pred_controller.predictForm);

module.exports = router;