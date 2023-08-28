let modoLuz = document.getElementById('modoLuz');
let modoLuzIcon = document.getElementById('modoLuzIcon');
let indicadorModoLuz = true;
let colorAnterior = localStorage.getItem('color');

modoLuz.addEventListener('click', () => {
    if(indicadorModoLuz == true){
        localStorage.setItem('color', 'sass/colors/colors_dark.css');
        colorGetMemory.setAttribute('href', localStorage.getItem('color'));
        
        mdtoast('Color oscuro activado.', { 
            interaction: true,
        });

        modoLuzIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;

        indicadorModoLuz = false;

    } else{
        localStorage.setItem('color', colorAnterior);
        colorGetMemory.setAttribute('href', localStorage.getItem('color'));
        
        mdtoast('Color oscuro desactivado.', { 
            interaction: true,
        });

        modoLuzIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;

        indicadorModoLuz = true;
    }

});