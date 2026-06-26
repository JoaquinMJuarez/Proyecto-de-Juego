const sonidoClick = new Audio("sounds/click.mp3");
const sonidoGanar = new Audio("sounds/win.mp3");
const sonidoPerder = new Audio("sounds/lose.mp3");
const sonidoEmpate = new Audio("sounds/draw.mp3");

// Volumen
sonidoClick.volume = 0.3;
sonidoGanar.volume = 0.5;
sonidoPerder.volume = 0.5;
sonidoEmpate.volume = 0.5;

let puntosJugador = 0;
let puntosPC = 0;

function jugar(jugador){

    sonidoClick.currentTime = 0;
    sonidoClick.play();

    const imagenPC = document.getElementById("imagenPC");
    const opciones = ["piedra", "papel", "tijera"];

    // Animación
    let indice = 0;

    const animacion = setInterval(() => {
        imagenPC.src = "img/" + opciones[indice] + ".png";
        indice = (indice + 1) % 3;
    }, 100);

    imagenPC.classList.add("animando");

    // Espera 1 segundo antes de mostrar el resultado
    setTimeout(() => {

        clearInterval(animacion);

        imagenPC.classList.remove("animando");


        let computadora = opciones[Math.floor(Math.random() * 3)];

        // Mostrar la imagen final
        imagenPC.src = "img/" + computadora + ".png";

        document.getElementById("eleccionJugador").textContent =
            "Jugador: " + jugador;

        document.getElementById("eleccionPC").textContent =
            "Computadora: " + computadora;

        let resultado = "";

        if(jugador === computadora){
            resultado = "Empate";
            sonidoEmpate.currentTime = 0;
            sonidoEmpate.play();
        }
        else if(
            (jugador === "piedra" && computadora === "tijera") ||
            (jugador === "papel" && computadora === "piedra") ||
            (jugador === "tijera" && computadora === "papel")
        ){
            resultado = "¡Ganaste!";
            puntosJugador++;
            sonidoGanar.currentTime = 0;
            sonidoGanar.play();
        }
        else{
            resultado = "Perdiste";
            puntosPC++;
            sonidoPerder.currentTime = 0;
            sonidoPerder.play();
        }

        document.getElementById("resultado").textContent = resultado;
        document.getElementById("puntosJugador").textContent = puntosJugador;
        document.getElementById("puntosPC").textContent = puntosPC;

    }, 1000);
}

function reiniciar(){

    puntosJugador = 0;
    puntosPC = 0;

    document.getElementById("puntosJugador").textContent = 0;
    document.getElementById("puntosPC").textContent = 0;

    document.getElementById("resultado").textContent = "Elige una opción";

    document.getElementById("eleccionJugador").textContent = "";
    document.getElementById("eleccionPC").textContent = "";

    document.getElementById("imagenPC").src = "img/piedra.png";
}