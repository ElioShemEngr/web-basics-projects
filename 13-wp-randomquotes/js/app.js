let botonElem = document.getElementById('boton-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor-cita');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function cambiarCita() {
    let randomIndex = randomNumber(0, citas.length);
    citaElem.innerText = `"${citas[randomIndex].texto}"`;
    autorElem.innerText = `${citas[randomIndex].autor}`;
}

botonElem.addEventListener('click', cambiarCita);

