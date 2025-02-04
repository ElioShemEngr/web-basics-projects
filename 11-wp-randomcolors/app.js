const body = document.querySelector("body");
const titleColor = document.querySelector(".title");
const boton = document.querySelector(".boton");


const colorsList = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a"
};

function ramdonColors (lista){
    const keys = Object.keys(lista);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const selectColor = colorsList[randomKey];
    return selectColor;
}

console.log(ramdonColors(colorsList));

function ChangeTitle(e) {
    const color = ramdonColors(colorsList)
    e.innerText = color;
}

function ChangeBackGround(e) {
    const color = ramdonColors(colorsList)
    e.style.backgroundColor = color;
}

function changeColor() {
    ChangeTitle(titleColor);
    ChangeBackGround(body);
}


boton.addEventListener('click', changeColor);
