const editoraModel = require('../models/editoraModel');

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditora();
        res.json(editoras) 
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar editoras.' });
    }
}

const getById = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ error: 'Editora não encontrada.' });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar editora.' });
    }
}

const createEditora = async (req, res) => {
    try {
        const { name_editora } = req.body;
        const newEditora = await editoraModel.createEditora(name_editora);
        res.status(201).json(newEditora);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar editora.' });
        
    }
}
const editPost = async (req, res) => {
    try {
        const { name_editora } = req.body;
        const editora = await editoraModel.editEditora(req.params.id, name_editora);
        if (!editora) {
            return res.status(404).json({ error: 'Editora não encontrada.' });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar editora.' });
    }
}
const deletePost = async (req, res) => {
    try {
        const result = await editoraModel.deleteEditora(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar editora.' });
    }
}

module.exports = { getAllEditoras, getById, createEditora, editPost, deletePost };