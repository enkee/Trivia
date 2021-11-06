//Declaración de preguntas
var preguntas = ["¿La novela La Tia Julia y el Escribidor esta inspirada en la vida de: ?",
    "¿Novela colombiana ganadora del Record Guinness en 2010?",
    "¿Nombre del personaje principal de la novela Los Reyes?"];

//Declaración de opciones
var opciones = [["Gabriel Garcia Marquez",
    "Pablo Neruda",
    "Jorge Luis Borges",
    "Mario Vargas Llosa"],
["Las Juanas",
    "Yo soy Betty, la fea",
    "Doña Bárbara",
    "El Clon"],
["Andres Reyes",
    "Edilberto Reyes",
    "Mariano Reyes",
    "Juan Reyes"]];

//puntajes de cada preguntas segun las opciones
var puntajePorOpcion = [
    [5, 0, 0, 0],
    [5, 0, 0, 0],
    [5, 0, 0, 0]];

//variables principales para el test
var puntaje = 0;
var indexPregunta = 0;
let interval;


// Inicia Cronometro
function iniciarCronometro() {
    var contador = 15;
    var cronometroDisplay = document.getElementById("cronometro");

    interval = setInterval(() => {
        if (contador === 0) {
            cronometroDisplay.innerHTML = "Se acabó el tiempo";
            clearInterval(interval);
            siguiPregunta();
        } else {
            contador = contador < 10 ? "0" + contador : contador;
            cronometroDisplay.innerHTML = "00:" + contador;
            contador--;
        }
    }, 1000)
}

//funcion para actualizar puntaje
function actualizarPuntaje(opcion) {
    puntaje += puntajePorOpcion[indexPregunta][opcion];

    document.getElementById("op1").disabled = true;
    document.getElementById("op2").disabled = true;
    document.getElementById("op3").disabled = true;
    document.getElementById("op4").disabled = true;
}

//funcion para pasar a una siguiente pregunta
function cargarPregunta() {
    iniciarCronometro();

    document.getElementById("pregunta").innerHTML = preguntas[indexPregunta];

    document.getElementById("op1").disabled = false;
    document.getElementById("op2").disabled = false;
    document.getElementById("op3").disabled = false;
    document.getElementById("op4").disabled = false;

    document.getElementById("op1").innerHTML = opciones[indexPregunta][0];
    document.getElementById("op2").innerHTML = opciones[indexPregunta][1];
    document.getElementById("op3").innerHTML = opciones[indexPregunta][2];
    document.getElementById("op4").innerHTML = opciones[indexPregunta][3];
}

//siguiente pregunta
function siguiPregunta() {
    indexPregunta++; //aumeta la variable de uno en uno
    if (indexPregunta < preguntas.length) {
        cargarPregunta();
    }
    else {
        localStorage.setItem("SCORE", puntaje);
        window.location.href = "resultados.html";
    }
}

//Inicializacion
function iniciar() {
    cargarPregunta(); //se ejecuta al cargar la página por primera vez
    if (localStorage.getItem("SCORE") != null) {
        localStorage.removeItem("SCORE");
    }
}

window.onload = iniciar();

//Eventos de Usuario

document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(0);
});

document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(1);
});

document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(2);
});

document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(3);
});

document.getElementById("siguiente").addEventListener("click", function () {
    clearInterval(interval), siguiPregunta();
});