const heroModel = require('../models/heroModel');

const getAllHeros = async (req, res) => {
    try {
        const {name} = req.query;
        const heros = await heroModel.getHeros(name);
        res.json(heros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários.' });
    }
};

module.exports = {getAllHeros};