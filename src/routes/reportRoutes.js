const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reportControllers");

router.get("/pdf", reportController.exportHeroPDF);

module.exports = router;