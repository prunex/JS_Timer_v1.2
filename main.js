"use strict"

var contador = 0;
var tiempoRestante = 4; //valor en segundos
var temporizador = document.getElementById("timer");

temporizador.textContent = contador;

if (window.location.search) {
    tiempoRestante = 0;
    var parametrosURL = new URLSearchParams(window.location.search);
    tiempoRestante += valorURL("h") * 60 * 60;
    tiempoRestante += valorURL("m") * 60;
    tiempoRestante += valorURL("s");
}

var miInterval = setInterval(cronometralo, 1000);
var audioDing = new Audio("ding-sound-effect_2.mp3");

function cronometralo() {
    contador++;
    temporizador.textContent = conversorTiempo(tiempoRestante - contador);
    if (tiempoRestante == contador) {
        stopInterval();
        audioDing.play();
    }
}

function conversorTiempo(tiempoRestante) {
    var h = Math.trunc(s / (60 * 60))
    var m = Math.trunc(s / 60) - h * 60
    var s = Math.trunc(s / 60) - m * 60
    return formatoTiempo(h) + "h : " + formatoTiempo(m) + "m : " + formatoTiempo(s) + "s";
}

function formatoTiempo(tiempo) {
    //if (tiempo.toString().length == 1) {
    if (tiempo < 9) {
        return "0" + tiempo;
    } else {
        return tiempo;
    }
}

function stopInterval() {
    clearInterval(miInterval);
}

function valorURL(parametro) {
    var condicion = parametrosURL.get(parametro);
    if (condicion) {
        var valorTiempo = parseInt(condicion);
    }
    return valorTiempo;
}

