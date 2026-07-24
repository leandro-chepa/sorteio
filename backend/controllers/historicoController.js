const historicoModel = require("../models/historicoModel");

async function listar(req, res) {

    try {

        const historico = await historicoModel.listar();

        res.json({
            sucesso: true,
            dados: historico
        });

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar histórico."
        });

    }

}

module.exports = {
    listar
};