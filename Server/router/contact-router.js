const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-validator");
const contactController = require("../controllers/contact-controller");

router.route("/contact").post(validate(contactSchema),contactController);
module.exports = router;
