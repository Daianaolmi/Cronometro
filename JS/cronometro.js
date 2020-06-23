
var hora = 0;
var minuto = 0;
var segundo = 0;

var tiempo = 1000; //valor expresado en segundos de un minuto
var crononometro;

function iniciar() {
    cronometro = setInterval(timer, tiempo);
}

function pausa() {
    clearInterval(cronometro);
}

function parar() {
    clearInterval(cronometro);
    hora = 0;
    minuto = 0;
    segundo = 0;

    document.getElementById('contador').innerText = '00:00:00';
}

function timer() {

    segundo++;

    if (segundo == 60) {
        segundo = 0;
        minuto++;

        if (minuto == 60) {
            mm = 0;
            hora++
        }
    }

    var formato = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo);
    document.getElementById('contador').innerText = formato;
}