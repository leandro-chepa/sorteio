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

// INSERIR
async function inserirItem(item) {
    try {

        await sql.connect(config);

        await sql.query`
            INSERT INTO itens
            (
                categoria,
                nome
            )
            VALUES
            (
                ${item.categoria},
                ${item.nome}
            )
        `;

    } catch (erro) {
        throw erro;
    }
}

// ATUALIZAR
async function atualizarItem(id, item) {

    try {

        await sql.connect(config);

        await sql.query`
            UPDATE itens
            SET

                categoria = ${item.categoria},
                nome = ${item.nome},
                ativo = ${item.ativo}

            WHERE id = ${id}
        `;

    } catch (erro) {
        throw erro;
    }

}

// EXCLUIR
async function excluirItem(id) {

    try {

        await sql.connect(config);

        await sql.query`
            DELETE FROM itens
            WHERE id = ${id}
        `;

    } catch (erro) {
        throw erro;
    }

}

module.exports = {

    listarItens,

    buscarPorId,

    inserirItem,

    atualizarItem,

    excluirItem

};