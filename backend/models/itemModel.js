const sql = require('mssql');
const { config } = require('../config/database');

// LISTAR TODOS
async function listarItens() {
    try {
        await sql.connect(config);

        const resultado = await sql.query(`
            SELECT *
            FROM itens
            ORDER BY categoria, nome
        `);

        return resultado.recordset;

    } catch (erro) {
        throw erro;
    }
}

// BUSCAR POR ID
async function buscarPorId(id) {
    try {
        await sql.connect(config);

        const resultado = await sql.query`
            SELECT *
            FROM itens
            WHERE id = ${id}
        `;

        return resultado.recordset[0];

    } catch (erro) {
        throw erro;
    }
}

module.exports = {
    listarItens,
    buscarPorId
};