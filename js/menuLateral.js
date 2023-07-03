//Contenedor principal
let mainContainerElement = document.getElementById('mainContainerElement');

//Boton para cerrar el menu
let closeMenuButton = document.getElementById('closeMenu');

//Accedemos a los titulos de las opciones
let titleOption = document.getElementsByClassName('titleOption');
let titleOptionArr = [...titleOption];

//Accedemos a los contenedores de las opciones
let mainContainerMenuOption = document.getElementsByClassName('mainContainer-menu-option');
let mainContainerMenuOptionArr = [...mainContainerMenuOption];

closeMenuButton.addEventListener('click', () => {

    if(mainContainerElement.classList.contains('mainContainer')){
        //Agregamos la clase para hacer gran y chico el menu
        mainContainerElement.classList.add('mainContainer-close');
        mainContainerElement.classList.remove('mainContainer');

        titleOptionArr.forEach(element => {
            element.classList.add('hideElementAnimation');

            setTimeout(() => {
                element.classList.add('hideElement');
            }, 10);
        });

        mainContainerMenuOptionArr.forEach(element => {
            element.classList.add('mainContainer-menu-option-close');
        });

    }else{
        mainContainerElement.classList.add('mainContainer');
        mainContainerElement.classList.remove('mainContainer-close');

        titleOptionArr.forEach(element => {
            element.classList.remove('hideElementAnimation');

            setTimeout(() => {
                element.classList.remove('hideElement');
            }, 50);
        });

        mainContainerMenuOptionArr.forEach(element => {
            element.classList.remove('mainContainer-menu-option-close');
        });
    }

});