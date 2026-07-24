async function sortearFilme() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Filme");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("filme").innerHTML =
            "🎬 " + resultado.dados.nome;

        await carregarHistorico();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }
    
}

async function sortearComida() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Comida");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("comida").innerHTML =
            "🍕 " + resultado.dados.nome;

        await carregarHistorico();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}

async function sortearLugar() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Lugar");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("lugar").innerHTML =
            "📍 " + resultado.dados.nome;

        await carregarHistorico();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}

async function sortearRestaurante() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Restaurante");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("restaurante").innerHTML =
            "🍽️ " + resultado.dados.nome;

        await carregarHistorico();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}

async function sortearSerie() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Serie");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("serie").innerHTML =
            "📺 " + resultado.dados.nome;

        await carregarHistorico();
        
    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}

async function sortearLivro() {

    try {

        const resposta = await fetch("http://localhost:3000/api/sorteio/Livro");

        const resultado = await resposta.json();

        if (!resultado.sucesso) {

            alert(resultado.mensagem);
            return;

        }

        document.getElementById("livro").innerHTML =
            "📚 " + resultado.dados.nome;

        await carregarHistorico();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}