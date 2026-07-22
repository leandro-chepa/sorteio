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

function salvarCadastro(){

    const nome = document.getElementById("txtNome").value.trim();

    if(nome === ""){

        alert("Informe um nome.");

        return;
    }

    console.log("Categoria:", categoriaAtual);
    console.log("Nome:", nome);

    fecharModal();
}

window.onclick = function(event){

    const modal = document.getElementById("modalCadastro");

    if(event.target === modal){

        fecharModal();
    }
}