//Es el framework para las notificaciones https://www.cssscript.com/google-toast-snackbar-material/

let paleta_ibm = document.getElementById('paleta_ibm');

paleta_ibm.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/IBM_accesibilidad.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado activado.', { 
        interaction: true,
    });

});

let paleta_bang = document.getElementById('paleta_bang');

paleta_bang.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/paleta_bang_wong.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Paleta Bang Wong activada.', { 
        interaction: true,
    });

});

let paleta_tol = document.getElementById('paleta_tol');

paleta_tol.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/paleta_paul_tol.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Paleta Paul Toul activada.', { 
        interaction: true,
    });

});

let paleta_ad_1 = document.getElementById('paleta_ad_1');

paleta_ad_1.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_1.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 1 activado.', { 
        interaction: true,
    });

});

let paleta_ad_2 = document.getElementById('paleta_ad_2');

paleta_ad_2.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_2.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 2 activado.', { 
        interaction: true,
    });

});

let paleta_ad_3 = document.getElementById('paleta_ad_3');

paleta_ad_3.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_3.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 3 activado.', { 
        interaction: true,
    });

});

let paleta_ad_4 = document.getElementById('paleta_ad_4');

paleta_ad_4.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_4.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 4 activado.', { 
        interaction: true,
    });

});

let paleta_ad_5 = document.getElementById('paleta_ad_5');

paleta_ad_5.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_5.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 5 activado.', { 
        interaction: true,
    });

});

let paleta_ad_6 = document.getElementById('paleta_ad_6');

paleta_ad_6.addEventListener('click', () => {  
    localStorage.setItem('color', 'sass/color_accesibilidad/color_adaptado_6.css');
    colorGetMemory.setAttribute('href', localStorage.getItem('color'));

    mdtoast('Color adaptado 6 activado.', { 
        interaction: true,
    });

});