//Establecemos el valor por defecto para los colores
if(!localStorage.getItem('color')){
    localStorage.setItem('color', 'sass/colors/colors_default.css');
}

//Accedemos a la url para establecer el color
let colorGetMemory = document.getElementById('colorGetMemory');
colorGetMemory.setAttribute('href', localStorage.getItem('color'));