const express = require('express');
const router = express.Router();
const editoraControllers = require('../controllers/editoraControllers');

router.get('/', editoraControllers.getAllEditoras);
router.get('/:id', editoraControllers.getById);
router.post('/', editoraControllers.createEditora);
router.put('/:id', editoraControllers.editPost);
router.delete('/:id', editoraControllers.deletePost);



module.exports = router;