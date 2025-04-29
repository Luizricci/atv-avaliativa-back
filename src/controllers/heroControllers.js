const heroModel = require('../models/heroModel');

const getAllHeros = async (req, res) => {
    try {
        const {name} = req.query;
        const heros = await heroModel.getHeros(name);
        res.json(heros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar Heróis.' });
    }
};

const getHeroById = async (req, res) => {
    const { id } = req.params;
    try {
        const hero = await heroModel.getHerosById(id);
        if (!hero) {
            return res.status(404).json({ error: 'Herói não encontrado.' });
        }
        res.json(hero);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar herói.' });
    }
}

const deleteHero = async (req, res) => {
    try {
        const result = await heroModel.deleteHeros(req.params.id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar herói.' });
    }
}

const updateHero = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const hero = await heroModel.updateHeros(id, data);
        if (!hero) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.json(hero);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar o herói." });
    }
}

const createHero = async (req, res) => {
    try {
        const { name, editoras_id } = req.body;
        const hero = await heroModel.createHeros(name, editoras_id);
        res.status(201).json(hero);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar o herói." });
    }
}

module.exports = {getAllHeros, getHeroById, deleteHero, updateHero, createHero};