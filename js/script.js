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