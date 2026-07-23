const sorteioModel = require("../models/sorteioModel");

async function sortear(req, res) {

    try {

        const categoria = req.params.categoria;

        const resultado = await sorteioModel.sortear(categoria);

        if (!resultado) {

            return res.status(404).json({
                sucesso: false,
                mensagem: `Não existem ${categoria}s disponíveis para sorteio.`
            });

        }

        res.json({
            sucesso: true,
            dados: resultado
        });

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao realizar sorteio."
        });

    }

}

module.exports = {
    sortear
};