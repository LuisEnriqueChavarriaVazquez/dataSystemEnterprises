//Establecemos el valor por defecto para las fuentes de texto
if(!localStorage.getItem('font')){
    localStorage.setItem('font', 'sass/fonts/poppins.css');
}

//Accedemos a la url para establecer la fuente
let fontGetMemory = document.getElementById('fontGetMemory');
fontGetMemory.setAttribute('href', localStorage.getItem('font'));