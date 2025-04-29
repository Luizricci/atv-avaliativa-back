const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reportControllers");
const apikey = require("../config/apiKey");


router.use(apikey);
router.get("/pdf", reportController.exportHeroPDF);

module.exports = router;