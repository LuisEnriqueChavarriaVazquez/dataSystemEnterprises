let modoLuz = document.getElementById('modoLuz');
let modoLuzIcon = document.getElementById('modoLuzIcon');
let modoLuzText = document.getElementById('modoLuzText');
let indicadorModoLuz = true;
let colorAnterior = localStorage.getItem('color');

if(colorAnterior == "sass/colors/colors_dark.css"){
    modoLuzIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    modoLuzText.innerText = "Modo luz desactivado";
}

modoLuz.addEventListener('click', () => {
    if(indicadorModoLuz == true){
        localStorage.setItem('color', 'sass/colors/colors_dark.css');
        colorGetMemory.setAttribute('href', localStorage.getItem('color'));
        
        mdtoast('Color oscuro activado.', { 
            interaction: true,
        });

        modoLuzIcon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        modoLuzText.innerText = "Modo luz desactivado";

        indicadorModoLuz = false;

    } else{
        if(colorAnterior == "sass/colors/colors_dark.css"){
            colorAnterior = "sass/colors/colors_default.css";
        }

        localStorage.setItem('color', colorAnterior);
        colorGetMemory.setAttribute('href', localStorage.getItem('color'));
        
        mdtoast('Color oscuro desactivado.', { 
            interaction: true,
        });

        modoLuzIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        modoLuzText.innerText = "Modo luz activado";

        indicadorModoLuz = true;
    }

});