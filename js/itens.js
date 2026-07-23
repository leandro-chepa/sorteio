async function carregarItens() {

    try {

        const itens = await listarItens();

        const tbody = document.querySelector("#tabelaItens tbody");

        tbody.innerHTML = "";

        itens.forEach(item => {

            tbody.innerHTML += `

                <tr>

                    <td>${item.id}</td>

                    <td>${item.categoria}</td>

                    <td>${item.nome}</td>

                    <td>${item.sorteado ? "✅ Sim" : "❌ Não"}</td>

                    <td>

                        <button onclick="editarItem(${item.id})">
                            ✏️
                        </button>

                        <button onclick="excluirItemTela(${item.id})">
                            🗑️
                        </button>

                    </td>

                </tr>

            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar itens:", erro);

    }

}

// =======================
// Excluir item
// =======================

async function excluirItemTela(id) {

    const confirmar = confirm("Deseja realmente excluir este item?");

    if (!confirmar) return;

    try {

        const resposta = await fetch(`http://localhost:3000/api/itens/${id}`, {

            method: "DELETE"

        });

        const retorno = await resposta.json();

        alert(retorno.mensagem);

        carregarItens();

    } catch (erro) {

        console.error("Erro ao excluir:", erro);

    }

}

// =======================
// Editar item (temporário)
// =======================

function editarItem(id) {

    alert(`Função editarItem(${id}) será implementada na próxima etapa.`);

}

// Carrega ao abrir a página
window.onload = function () {

    carregarItens();

};