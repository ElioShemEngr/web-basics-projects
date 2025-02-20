const botonPlay = document.getElementById("play-pause");
const botonReplay = document.getElementById("replay");
const cronometro = document.getElementById("cronometro");


let horas = 0;
let minutos = 0;
let segundos = 0;

let intervaloTiempo;
let estadoCronometro = 'pausado';

function actualizarCronometro() {
  segundos++;

  if (segundos == 60){
    segundos = 0;
    minutos++;
  }

  if (minutos == 60){
    minutos = 0;
    horas++;
  }

  cronometro.innerText = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}

botonPlay.addEventListener('click', function() {
  if(estadoCronometro === 'pausado') {
    intervaloTiempo = setInterval(actualizarCronometro, 1000);
    botonPlay.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonPlay.classList.remove('iniciar')
    botonPlay.classList.add('pausar')
    estadoCronometro = 'iniciado'
  } else { 
    clearInterval(intervaloTiempo);
    botonPlay.innerHTML = '<i class="bi bi-play-fill"></i>';    
    botonPlay.classList.remove('pausar')
    botonPlay.classList.add('iniciar')
    estadoCronometro = 'pausado'
  }
});


botonReplay.addEventListener('click', function(){
  clearInterval(intervaloTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  cronometro.innerText = '00:00:00';
  botonPlay.innerHTML = '<i class="bi bi-play-fill"></i>';    
  botonPlay.classList.remove('pausar')
  botonPlay.classList.add('iniciar')
  estadoCronometro = 'pausado'
});



/*
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    cronometro.innerText = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    botonPlay.innerHTML = '<i class="bi bi-pause-fill"></i>';

  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  botonPlay.innerHTML = '<i class="bi bi-play-fill"></i>';
  cronometro.innerText = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

botonPlay.addEventListener("click", startTimer);
botonReplay.addEventListener("click", resetTimer);
*/