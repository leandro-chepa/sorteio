const itemModel = require("../models/itemModel");

// GET /api/itens
async function listarItens(req, res) {
    try {
        const itens = await itemModel.listarItens();

        res.status(200).json(itens);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao listar os itens."
        });
    }
}

// GET /api/itens/:id
async function buscarPorId(req, res) {
    try {
        const { id } = req.params;

        const item = await itemModel.buscarPorId(id);

        if (!item) {
            return res.status(404).json({
                sucesso: false,
                mensagem: "Item não encontrado."
            });
        }

        res.status(200).json(item);

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao buscar o item."
        });
    }
}

// POST /api/itens
async function inserirItem(req, res) {
    try {

        const item = req.body;

        await itemModel.inserirItem(item);

        res.status(201).json({
            sucesso: true,
            mensagem: "Item cadastrado com sucesso."
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao cadastrar o item."
        });
    }
}

// PUT /api/itens/:id
async function atualizarItem(req, res) {
    try {

        const { id } = req.params;

        const item = req.body;

        await itemModel.atualizarItem(id, item);

        res.status(200).json({
            sucesso: true,
            mensagem: "Item atualizado com sucesso."
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao atualizar o item."
        });
    }
}

// DELETE /api/itens/:id
async function excluirItem(req, res) {
    try {

        const { id } = req.params;

        await itemModel.excluirItem(id);

        res.status(200).json({
            sucesso: true,
            mensagem: "Item excluído com sucesso."
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao excluir o item."
        });
    }
}

module.exports = {
    listarItens,
    buscarPorId,
    inserirItem,
    atualizarItem,
    excluirItem
};