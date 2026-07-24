const API = "http://localhost:3000/api";

// =======================
// LISTAR
// =======================

async function listarItens() {

    try {

        const resposta = await fetch(`${API}/itens`);

        return await resposta.json();

    } catch (erro) {

        console.error("Erro ao listar itens:", erro);

    }

}

// =======================
// CADASTRAR
// =======================

async function cadastrarItem(categoria, nome) {

    try {

        const resposta = await fetch(`${API}/itens`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                categoria,
                nome
            })

        });

        return await resposta.json();

    } catch (erro) {

        console.error("Erro ao cadastrar item:", erro);

    }

}

// =======================
// LISTAR HISTÓRICO
// =======================
async function listarHistorico() {

    try {

        const resposta = await fetch(`${API}/historico`);

        const dados = await resposta.json();

        return dados.dados;

    } catch (erro) {

        console.error(erro);

        return [];

    }

}