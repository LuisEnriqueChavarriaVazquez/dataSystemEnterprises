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

//Accedemos al icono de la escuela
let iconSchool = document.getElementById('iconSchool');

closeMenuButton.addEventListener('click', () => {

    if(mainContainerElement.classList.contains('mainContainer')){
        //Agregamos la clase para hacer grande y chico el menu (Se hace chico)
        mainContainerElement.classList.add('mainContainer-close');
        mainContainerElement.classList.remove('mainContainer');

        //Animacion para que en las opciones se oculte el texto
        titleOptionArr.forEach(element => {
            element.classList.add('hideElementAnimation');

            setTimeout(() => {
                element.classList.add('hideElement');
            }, 10);
        });

        //Animacion para que los contenedores de las opciones se adapten al nuevo tamaño
        mainContainerMenuOptionArr.forEach(element => {
            element.classList.add('mainContainer-menu-option-close');
        });

        //Cambiamos el icono del boton de cerrar el menu
        closeMenuButton.innerHTML = `<i class="fa-sharp fa-solid fa-bars waves-effect waves-light border-2"></i>`;
        closeMenuButton.setAttribute('style', 'margin: 0 5px 10px 5px;');

        //Modificamos los estilos del icono en la parte superior cuando el menu es compacto
        iconSchool.classList.add('iconSchoolMini');

    }else{
        //Agregamos la clase para hacer grande y chico el menu (se hace grande)
        mainContainerElement.classList.add('mainContainer');
        mainContainerElement.classList.remove('mainContainer-close');

        //Animacion para que en las opciones se muestre el texto
        titleOptionArr.forEach(element => {
            element.classList.remove('hideElementAnimation');

            setTimeout(() => {
                element.classList.remove('hideElement');
            }, 50);
        });

        //Animacion para que los contenedores de las opciones se adapten al nuevo tamaño
        mainContainerMenuOptionArr.forEach(element => {
            element.classList.remove('mainContainer-menu-option-close');
        });

        //Cambiamos el icono del boton de cerrar el menu
        closeMenuButton.innerHTML = `<i class="fa-sharp fa-solid fa-xmark waves-effect waves-light border-2"></i>`;
        closeMenuButton.setAttribute('style', 'margin: 0 0 20px 0;');

        //Removemos el tamaño del icono, para que vuelva a su tamaño anterior
        iconSchool.classList.remove('iconSchoolMini');
    }

});