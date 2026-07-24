const { sql, config } = require("../config/database");

async function sortear(categoria) {

    try {

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

        // Gravar histórico
        await pool.request()

            .input("item_id", sql.Int, item.id)
            .input("categoria", sql.VarChar, item.categoria)
            .input("resultado", sql.VarChar, item.nome)

            .query(`
                INSERT INTO historico
                (
                    item_id,
                    categoria,
                    resultado
                )
                VALUES
                (
                    @item_id,
                    @categoria,
                    @resultado
                )
            `);

        return item;

    } catch (erro) {

        console.error("Erro ao realizar sorteio:", erro);

        throw erro;

    }

}

module.exports = {
    sortear
};