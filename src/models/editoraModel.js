const pool = require("../config/database");

const getEditora = async () => {
    const result = await pool.query (
        `SELECT * FROM editoras`,
);
        return result.rows
}

const getEditoraById = async (id) => {
    const result = await pool.query (`SELECT * FROM editoras WHERE id = $1`, [id])
    return result.rows
}

const createEditora = async (name_editora) => {
    const result = await pool.query (`INSERT INTO editoras (name_editora) VALUES ($1) RETURNING *`, [name_editora])
    return result.rows[0]
}

const editEditora = async (id, name_editora) => {
    const result = await pool.query (`UPDATE editoras SET name_editora = $1 WHERE id = $2 RETURNING *`, [name_editora, id])
    return result.rows[0]
}

const deleteEditora = async (id) => {
    const result = await pool.query (`DELETE FROM editoras WHERE id = $1 RETURNING *`, [id])
    if (result.rowCount === 0) {
        return { error: "Editora não encontrada." };
    }
    return { message: "Editora deletada com sucesso." };
}


module.exports = {getEditora, getEditoraById, createEditora, editEditora, deleteEditora};