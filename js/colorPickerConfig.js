let huelum = document.getElementById('huelum');

huelum.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_huelum.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let verde = document.getElementById('verde');

verde.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_default.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let azul = document.getElementById('azul');

azul.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_blue.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let rojo = document.getElementById('rojo');

rojo.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_red.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let aqua = document.getElementById('aqua');

aqua.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_aqua.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let purpura = document.getElementById('purpura');

purpura.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_purple.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let rosa = document.getElementById('rosa');

rosa.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_pink.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let cafe = document.getElementById('cafe');

cafe.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_brown.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});

let naranja = document.getElementById('naranja');

naranja.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_orange.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));
});