// METODOS BASICOS DE SELECCION
/*
// Seleccionar por ID
const tituloPrincipal = document.getElementById('titulo');
console.log(tituloPrincipal);

// Seleccionar por clase (devuelve HTMLCollection)
const toppings = document.getElementsByClassName('topping');
console.log(toppings);

// Seleccionar por etiqueta (devuelve HTMLCollection)
const listaToppings = document.getElementsByTagName('li');
console.log(listaToppings);

// Selector CSS moderno (devuelve primer elemento)
const contenedorPrincipal = document.querySelector('.topping');
console.log(contenedorPrincipal);

// Selector CSS moderno (devuelve NodeList)
const tareasCompletadas = document.querySelectorAll('.topping.fondo-marron');
console.log(tareasCompletadas);
*/



// NAVEGACION POR EL DOM
/*
const elemento = document.querySelector("#lista-toppings");
// console.log(elemento);

console.log("*** Por Nodos ***");
// ** Navegar entre Nodos **
// Nodo Padre
const nodoPadre = elemento.parentNode;
console.log(nodoPadre);
// Nodos Hijos
const primerHijo = elemento.firstChild; // No recomendable
console.log(primerHijo);
const ultimoHijo = elemento.lastChild; // No recomendable
console.log(ultimoHijo);
// Nodos hermanos
const siguienteHermano = elemento.nextSibling; // No recomendable
console.log(siguienteHermano);
const anteriorHermano = elemento.previousSibling; // No recomendable
console.log(anteriorHermano);

console.log("*** Por Elementos ***");
// ** Navegar entre elementos **
// Elemento Padre
const elementoPadre = elemento.parentElement;
console.log(elementoPadre);
// Elementos hijos
const primerHijoEl = elemento.firstElementChild;
console.log(primerHijoEl);
const ultimoHijoEl = elemento.lastElementChild;
console.log(ultimoHijoEl);
// Elementos Hermanos
const siguienteHermanoEl = elemento.nextElementSibling;
console.log(siguienteHermanoEl);
const anteriorHermanoEl = elemento.previousElementSibling;
console.log(anteriorHermanoEl);
*/



// MANIPULACION DE ELEMENTOS
// ** Modificar Contenido **
const titulo = document.querySelector("#titulo");
// Textos
titulo.innerText = "Pizzeria Gloriosa";
console.log(titulo.innerText);
console.log(titulo.textContent); // Otra forma de mostrar texto
// Html
titulo.innerHTML = "<h4 style='color:purple'>😎Elioshem</h4>";
console.log(titulo);

// ** Manipular Atributos **
const enlaceWeb = document.querySelector(".web-page");
// obtener atributo
const url = enlaceWeb.getAttribute("href");
console.log(url);
// establecer atributo
enlaceWeb.setAttribute("href", "https://www.google.com/imghp?hl=en&authuser=0&ogbl")
// eliminar atributo
enlaceWeb.removeAttribute("href");

// Trabajar con clases
console.log(enlaceWeb.classList); // Ver clases actuales
enlaceWeb.classList.add('completed');
enlaceWeb.classList.remove('other');
console.log(enlaceWeb)
const contain = enlaceWeb.classList.contains('completed'); // devuelve boolean
console.log(contain)

// ** Crear y Manipular Elementos **
// Creamos referencia
const listaDeToppings = document.getElementById("lista-toppings");

// Configurar Elemento a Agregar
const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron")
toppingNuevo.innerText = "Piña";

// Agregar Elemento
listaDeToppings.append(toppingNuevo);

// Eliminar Elemento
toppingNuevo.remove();

