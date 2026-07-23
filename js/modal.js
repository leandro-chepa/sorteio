let categoriaAtual = "";

function abrirModal(categoria){

    categoriaAtual = categoria;

    document.getElementById("tituloModal").innerHTML =
        "Cadastrar " + categoria;

    document.getElementById("txtNome").value = "";

    document.getElementById("modalCadastro").style.display = "flex";
}

function fecharModal(){

    document.getElementById("modalCadastro").style.display = "none";
}

async function salvarCadastro(){

    const nome = document.getElementById("txtNome").value.trim();

    if(nome === ""){

        alert("Informe um nome.");

        return;
    }

    try{

        const retorno = await cadastrarItem(categoriaAtual, nome);

        if(retorno.sucesso){

            alert(retorno.mensagem);

            fecharModal();

            carregarItens();

        }else{

            alert("Erro ao cadastrar.");

        }

    }catch(erro){

        console.error(erro);

        alert("Erro ao conectar com a API.");

    }

}

window.onclick = function(event){

    const modal = document.getElementById("modalCadastro");

    if(event.target === modal){

        fecharModal();
    }
}