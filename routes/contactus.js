const express = require("express");
const path = require("path");

const contactUsController = require('../controllers/contactUs');

const router = express.Router();

router.get("/contact-us", contactUsController.getContactUs);

router.post("/contact-us", contactUsController.postContactUs);

module.exports = router;