//Es el framework para las notificaciones https://www.cssscript.com/google-toast-snackbar-material/

let fuente_uno = document.getElementById('fuente_uno');

fuente_uno.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/roboto.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Roboto activada.', { 
        interaction: true,
    });

});


let fuente_dos = document.getElementById('fuente_dos');

fuente_dos.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/poppins.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Poppins activada.', { 
        interaction: true,
    });

});

let fuente_tres = document.getElementById('fuente_tres');

fuente_tres.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/nunito.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Nunito activada.', { 
        interaction: true,
    });

});

let fuente_cuatro = document.getElementById('fuente_cuatro');

fuente_cuatro.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/merriweather.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Merriweather activada.', { 
        interaction: true,
    });

});

let fuente_cinco = document.getElementById('fuente_cinco');

fuente_cinco.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/jost.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Jost activada.', { 
        interaction: true,
    });

});


let fuente_seis = document.getElementById('fuente_seis');

fuente_seis.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/fredoka.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Fredoka activada.', { 
        interaction: true,
    });

});

let fuente_siete = document.getElementById('fuente_siete');

fuente_siete.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/dm_sans.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Dm Sans activada.', { 
        interaction: true,
    });

});

let fuente_ocho = document.getElementById('fuente_ocho');

fuente_ocho.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/comic_neue.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Comic Neue activada.', { 
        interaction: true,
    });

});


let fuente_nueve = document.getElementById('fuente_nueve');

fuente_nueve.addEventListener('click', () => {  
    localStorage.setItem('font', 'sass/fonts/bellota_text.css');
    fontGetMemory.setAttribute('href', localStorage.getItem('font'));

    mdtoast('Fuente Bellota Text activada.', { 
        interaction: true,
    });

});