const express = require('express');
const router = express.Router();
const heroControllers = require('../controllers/heroControllers');

router.get('/', heroControllers.getAllHeros);

module.exports = router;