const inputRed = document.getElementById('r');
const inputGreen = document.getElementById('g');
const inputBlue = document.getElementById('b');

const tagRed = document.getElementById('tag-red');
const tagGreen = document.getElementById('tag-green');
const tagBlue = document.getElementById('tag-blue');

// Variable para guardar el valor
let saveValueRed = inputRed.value;
let saveValueGreen = inputGreen.value;
let saveValueBlue = inputBlue.value;

function updateColor(saveValueRed, saveValueGreen, saveValueBlue) {
    const colorRGB = `rgb(${saveValueRed},${saveValueGreen},${saveValueBlue})`;
    document.body.style.backgroundColor = colorRGB;
}

// Actualizar Red
inputRed.addEventListener('input', (event) => {
    saveValueRed = event.target.value; // Guardar Valor
    tagRed.textContent = saveValueRed; // Mostrar en Pantalla
    updateColor(saveValueRed, saveValueGreen, saveValueBlue);
});

// Actualizar Green
inputGreen.addEventListener('input', (event) => {
    saveValueGreen = event.target.value; // Guardar Valor
    tagGreen.textContent = saveValueGreen; // Mostrar en Pantalla
    updateColor(saveValueRed, saveValueGreen, saveValueBlue);
});

// Actualizar Blue
inputBlue.addEventListener('input', (event) => {
    saveValueBlue = event.target.value; // Guardar Valor
    tagBlue.textContent = saveValueBlue; // Mostrar en Pantalla
    updateColor(saveValueRed, saveValueGreen, saveValueBlue);
});




