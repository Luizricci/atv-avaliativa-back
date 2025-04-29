const express = require('express');
const router = express.Router();
const upload = require("../config/upload.js");
const editoraControllers = require('../controllers/editoraControllers');
const apikey = require("../config/apiKey");

router.use(apikey);
router.get('/', editoraControllers.getAllEditoras);
router.get('/:id', editoraControllers.getById);
router.post('/', upload.single("photo"), editoraControllers.createEditora);
router.put('/:id', editoraControllers.editEditora);
router.delete('/:id', editoraControllers.deleteEditora);



module.exports = router;