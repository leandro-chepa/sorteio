const { sql, config } = require("../config/database");

async function sortear(categoria) {

    const pool = await sql.connect(config);

    // Buscar um item aleatório
    const resultado = await pool.request()

        .input("categoria", sql.VarChar, categoria)

        .query(`
            SELECT TOP 1
                id,
                categoria,
                nome
            FROM itens
            WHERE categoria = @categoria
              AND ativo = 1
              AND sorteado = 0
            ORDER BY NEWID()
        `);

    if (resultado.recordset.length === 0) {

        return null;

    }

    const item = resultado.recordset[0];

    // Marcar como sorteado
    await pool.request()

        .input("id", sql.Int, item.id)

        .query(`
            UPDATE itens
               SET sorteado = 1
             WHERE id = @id
        `);

    return item;

}

module.exports = {
    sortear
};