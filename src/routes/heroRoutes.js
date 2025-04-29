const express = require('express');
const router = express.Router();
const heroControllers = require('../controllers/heroControllers');
const apikey = require("../config/apiKey");

router.use(apikey);
router.get('/', heroControllers.getAllHeros);
router.get('/:id', heroControllers.getHeroById);
router.post('/', heroControllers.createHero);
router.put('/:id', heroControllers.updateHero);
router.delete('/:id', heroControllers.deleteHero);

module.exports = router;