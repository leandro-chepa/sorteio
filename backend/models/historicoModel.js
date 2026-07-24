const { sql, config } = require("../config/database");

async function listar() {

    try {

        const pool = await sql.connect(config);

        const resultado = await pool.request()

            .query(`
                SELECT
                    id,
                    categoria,
                    resultado,
                    data_sorteio
                FROM historico
                ORDER BY data_sorteio DESC
            `);

        return resultado.recordset;

    } catch (erro) {

        throw erro;

    }

}

module.exports = {
    listar
};
