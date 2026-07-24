async function carregarHistorico() {

    const historico = await listarHistorico();

    const tbody = document.getElementById("tabelaHistorico");

    tbody.innerHTML = "";

    historico.forEach(item => {

        const data = new Date(item.data_sorteio);

        const dataFormatada =
            data.toLocaleDateString("pt-BR") +
            " " +
            data.toLocaleTimeString("pt-BR");

        tbody.innerHTML += `
            <tr>
                <td>${dataFormatada}</td>
                <td>${item.categoria}</td>
                <td>${item.resultado}</td>
            </tr>
        `;

    });

}

window.addEventListener("load", () => {

    carregarHistorico();

});