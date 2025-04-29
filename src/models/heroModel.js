const pool = require("../config/database");

const getHeros = async (name) => {
    if(!name){
        const result = await pool.query("SELECT * FROM herois");
        return result.rows;
    }
    else{
        const result = await pool.query("SELECT * FROM herois WHERE name ILIKE $1", [`%${name}%`]);
        return result.rows;
    }

};

module.exports = {getHeros};