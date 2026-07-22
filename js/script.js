const filmes = [
    "Vingadores",
    "Interestelar",
    "Shrek",
    "John Wick",
    "Toy Story",
    "Batman",
    "Jurassic Park",
    "Avatar"
];

const comidas = [
    "Pizza",
    "Hambúrguer",
    "Sushi",
    "Lasanha",
    "Churrasco",
    "Pastel",
    "Yakisoba",
    "Açaí"
];

const lugares = [
    "Cinema",
    "Parque",
    "Shopping",
    "Praia",
    "Museu",
    "Kartódromo",
    "Restaurante",
    "Casa de amigos"
];

const restaurantes = [
    "Pizzaria",
    "Hambúrgueria",
    "Sushi Bar",
    "Restaurante Italiano",
    "Churrascaria",
    "Pastelaria",
    "Yakisoba House",
    "Açaí Delícia"
];

function aleatorio(lista){

    return lista[Math.floor(Math.random()*lista.length)];

}

function sortearFilme(){

    document.getElementById("filme").innerHTML =
        "🎬 " + aleatorio(filmes);

}

function sortearComida(){

    document.getElementById("comida").innerHTML =
        "🍕 " + aleatorio(comidas);

}

function sortearLugar(){

    document.getElementById("lugar").innerHTML =
        "📍 " + aleatorio(lugares);

}

function sortearRestaurante(){

    document.getElementById("restaurante").innerHTML =
        "🍽️ " + aleatorio(restaurante);

}

function sortearSerie(){

    document.getElementById("serie").innerHTML =
        "📺 " + aleatorio(seriess);

}

function sortearLivro(){

    document.getElementById("livro").innerHTML =
        "📚 " + aleatorio(livros);

}