let puntosJugador = 0;
let puntosPc = 0;

function jugar(jugador){

    const opciones = ["piedra", "papel", "tijera"];

    let computadora =
        opciones[Math.floor(Math.random() * 3)];

    document.getElementById("eleccionJugador")
        .textContent = "Jugador: " + jugador;

    document.getElementById("eleccionPC")
        .textContent = "Computadora: " + computadora;

    let resultado = "";

    if(jugador === computadora){
        resultado = "Empate";
    }
    else if(
        (jugador === "piedra" && computadora === "tijera") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijera" && computadora === "papel")
    ){
        resultado = "¡Ganaste!";
        puntosJugador++;
    }
    else{
        resultado = "Perdiste";
        puntosPC++;
    }

    document.getElementById("resultado")
        .textContent = resultado;

    document.getElementById("puntosJugador")
        .textContent = puntosJugador;

    document.getElementById("puntosPC")
        .textContent = puntosPC;
}

function reiniciar(){
    puntosJugador = 0;
    puntosPC = 0;

    document.getElementById("puntosJugador")
        .textContent = 0;

    document.getElementById("puntosPC")
        .textContent = 0;

    document.getElementById("resultado")
        .textContent = "Elige una opción";

    document.getElementById("eleccionJugador")
        .textContent = "";

    document.getElementById("eleccionPC")
        .textContent = "";
}