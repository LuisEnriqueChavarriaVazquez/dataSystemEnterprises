//Es el framework para las notificaciones https://www.cssscript.com/google-toast-snackbar-material/

let huelum = document.getElementById('huelum');

huelum.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_huelum.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color huelum activado.', { 
        interaction: true,
    });

});

let verde = document.getElementById('verde');

verde.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_default.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color verde activado.', { 
        interaction: true,
    });

});

let azul = document.getElementById('azul');

azul.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_blue.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color azul activado.', { 
        interaction: true,
    });

});

let rojo = document.getElementById('rojo');

rojo.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_red.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color rojo activado.', { 
        interaction: true,
    });

});

let aqua = document.getElementById('aqua');

aqua.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_aqua.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color aqua activado.', { 
        interaction: true,
    });

});

let purpura = document.getElementById('purpura');

purpura.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_purple.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color purpura activado.', { 
        interaction: true,
    });

});

let rosa = document.getElementById('rosa');

rosa.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_pink.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color rosa activado.', { 
        interaction: true,
    });

});

let cafe = document.getElementById('cafe');

cafe.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_brown.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color café activado.', { 
        interaction: true,
    });

});

let naranja = document.getElementById('naranja');

naranja.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/colors/colors_orange.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color naranja activado.', { 
        interaction: true,
    });

});