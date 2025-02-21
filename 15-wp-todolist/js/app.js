const input = document.getElementById("ingresar-tarea");
const botonCrear = document.getElementById("boton");
const contenedorTareas = document.getElementById("contenedor-tareas");

function agregarTarea() {
  if (input.value) {
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // Texto agreagado por el Usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear y Agregar Iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    //Iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'boton-estado');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash-fill', 'boton-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregar tarea a la lista
    contenedorTareas.appendChild(tareaNueva);

  } else {
    alert('Por favor ingrese una tarea');
  }
}


function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();

}

botonCrear.addEventListener("click", agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
})