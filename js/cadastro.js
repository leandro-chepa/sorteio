async function carregarItens() {

    const itens = await listarItens();

    const tbody = document.querySelector("#tabelaItens tbody");

    tbody.innerHTML = "";

    itens.forEach(item => {

        tbody.innerHTML += `

            <tr>

                <td>${item.id}</td>

                <td>${item.categoria}</td>

                <td>${item.nome}</td>

                <td>${item.sorteado ? "Sim" : "Não"}</td>

                <td>

                    <button onclick="editarItem(${item.id})">
                        ✏
                    </button>

                    <button onclick="excluirItem(${item.id})">
                        🗑
                    </button>

                </td>

            </tr>

        `;

    });

}