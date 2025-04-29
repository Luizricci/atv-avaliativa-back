const pool = require("../config/database");

const getHeros = async (name) => {
    if(!name){
        const result = await pool.query(`
            SELECT herois.id, herois.name AS hero_name, editoras.name_editora AS editor_name
                FROM herois
            LEFT JOIN editoras ON herois.editoras_id = editoras.id`
        );
        return result.rows;
    }
    else{
        const result = await pool.query(`            
            SELECT herois.id, herois.name AS hero_name, editoras.name_editora AS editor_name
                FROM herois
            LEFT JOIN editoras ON herois.editoras_id = editoras.id
            WHERE herois.name ILIKE $1`, 
            [`%${name}%`]);
        return result.rows;
    }

};

const getHerosById = async (id) => {
    const result = await pool.query("SELECT * FROM herois WHERE id = $1", [id]);
    return result.rows[0];
};

const deleteHeros = async (id) => {
    const result = await pool.query("DELETE FROM herois WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "herói não encontrado." };
    }
    return { message: "herói deletado com sucesso." };
};

const updateHeros = async (id, data) => {
    const { name, editoras_id } = data;
    const result = await pool.query("UPDATE herois SET name = $1, editoras_id = $2 WHERE id = $3 RETURNING *", [name, editoras_id, id]);
    return result.rows[0];
};

const createHeros = async (name, editoras_id) => {
    const result = await pool.query("INSERT INTO herois (name, editoras_id) VALUES ($1, $2) RETURNING *", [name, editoras_id]);
    return result.rows[0];
};


module.exports = {getHeros, getHerosById, deleteHeros, updateHeros, createHeros};