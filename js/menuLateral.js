//Contenedor principal
let mainContainerElement = document.getElementById("mainContainerElement");

//Boton para cerrar el menu
let closeMenuButton = document.getElementById("closeMenu");

//Accedemos a los titulos de las opciones
let titleOption = document.getElementsByClassName("titleOption");
let titleOptionArr = [...titleOption];

//Accedemos a los contenedores de las opciones
let mainContainerMenuOption = document.getElementsByClassName(
  "mainContainer-menu-option"
);
let mainContainerMenuOptionArr = [...mainContainerMenuOption];

//Accedemos al icono de la escuela
let iconSchool = document.getElementById("iconSchool");

//Boton para abrir y cerrar el menu
closeMenuButton.addEventListener("click", () => {
  if (mainContainerElement.classList.contains("mainContainer")) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

//Funcion para cerrar el menu
function cerrarMenu() {
  
  //Cambiamos el tamaño del contenedor de los graficos
  let container_graphs = document.getElementsByClassName('container_graphs');
  let container_graphs_arr = [...container_graphs];
  let menuContenidoPrincipal = document.getElementById('menuContenidoPrincipal');

  container_graphs_arr.forEach(i => {
    if(i.getAttribute('style') != "display: none;"){
      i.setAttribute('style', 'width:' + (window.innerWidth - menuContenidoPrincipal.offsetWidth) +  "px; display: grid;");
    }
  })

  //Agregamos la clase para hacer grande y chico el menu (Se hace chico)
  mainContainerElement.classList.add("mainContainer-close");
  mainContainerElement.classList.remove("mainContainer");

  //Animacion para que en las opciones se oculte el texto
  titleOptionArr.forEach((element) => {
    element.classList.add("hideElementAnimation");

    setTimeout(() => {
      element.classList.add("hideElement");
    }, 10);
  });

  //Animacion para que los contenedores de las opciones se adapten al nuevo tamaño
  mainContainerMenuOptionArr.forEach((element) => {
    element.classList.add("mainContainer-menu-option-close");
  });

  //Cambiamos el icono del boton de cerrar el menu
  closeMenuButton.innerHTML = `<i class="fa-sharp fa-solid fa-bars waves-effect waves-light border-2"></i>`;
  closeMenuButton.setAttribute("style", "margin: 0 5px 10px 5px;");

  //Modificamos los estilos del icono en la parte superior cuando el menu es compacto
  iconSchool.classList.add("iconSchoolMini");

  //Ajustamos el tamaño de los titulos de las cards (sección de informacion)
  let cardTitle = document.getElementsByClassName("cardTitle");
  let cardTitlearr = [...cardTitle];
  if (cardTitlearr) {
    cardTitlearr.forEach((e) => {
      e.setAttribute("style", "width: 100%");
    });
  }

  //Ajustamos el tamaño de los contenedores de formula
  let formulaStyle = document.getElementsByClassName("formulaStyle");
  let formulaStylearr = [...formulaStyle];
  if (formulaStylearr) {
    formulaStylearr.forEach((e) => {
      e.setAttribute("style", "width: 67vw");
    });
  }

  //Ajustamos el tamaño del contenedor para los textos importantes
  let importantNote = document.getElementsByClassName("importantNote");
  let importantNotearr = [...importantNote];
  if (importantNotearr) {
    importantNotearr.forEach((e) => {
      e.setAttribute("style", "width: 67vw");
    });
  }

  //Ajustamos el tamaño del contendor de textos en general
  let cardText = document.querySelectorAll('.cardText p');
  let cardTextarr = [...cardText];
  if (cardTextarr) {
    cardTextarr.forEach((e) => {
      e.setAttribute("style", "width: 67vw");
    });
  }
}

//Funcion para abrir el menu
function abrirMenu() {
  
  //Cambiamos el tamaño del contenedor de los graficos
  let container_graphs = document.getElementsByClassName('container_graphs');
  let container_graphs_arr = [...container_graphs];
  let menuContenidoPrincipal = document.getElementById('menuContenidoPrincipal');

  container_graphs_arr.forEach(i => {
    if(i.getAttribute('style') != "display: none;"){
      i.setAttribute('style', 'width:' + (window.innerWidth - menuContenidoPrincipal.offsetWidth - 400) +  "px; display: grid;");
    }
  })

  //Agregamos la clase para hacer grande y chico el menu (se hace grande)
  mainContainerElement.classList.add("mainContainer");
  mainContainerElement.classList.remove("mainContainer-close");

  //Animacion para que en las opciones se muestre el texto
  titleOptionArr.forEach((element) => {
    element.classList.remove("hideElementAnimation");

    setTimeout(() => {
      element.classList.remove("hideElement");
    }, 50);
  });

  //Animacion para que los contenedores de las opciones se adapten al nuevo tamaño
  mainContainerMenuOptionArr.forEach((element) => {
    element.classList.remove("mainContainer-menu-option-close");
  });

  //Cambiamos el icono del boton de cerrar el menu
  closeMenuButton.innerHTML = `<i class="fa-sharp fa-solid fa-xmark waves-effect waves-light border-2"></i>`;
  closeMenuButton.setAttribute("style", "margin: 0 0 20px 0;");

  //Removemos el tamaño del icono, para que vuelva a su tamaño anterior
  iconSchool.classList.remove("iconSchoolMini");

  //Ajustamos el tamaño de los titulos de las cards (sección de informacion)
  let cardTitle = document.getElementsByClassName("cardTitle");
  let cardTitlearr = [...cardTitle];
  if (cardTitlearr) {
    cardTitlearr.forEach((e) => {
      e.setAttribute("style", "width: 99.5%");
    });
  }

  //Ajustamos el tamaño de los contenedores de formula
  let formulaStyle = document.getElementsByClassName("formulaStyle");
  let formulaStylearr = [...formulaStyle];
  if (formulaStylearr) {
    formulaStylearr.forEach((e) => {
      e.setAttribute("style", "width: 55vw; font-size: 15px;");
    });
  }

  //Ajustamos el tamaño del contenedor para los textos importantes
  let importantNote = document.getElementsByClassName("importantNote");
  let importantNotearr = [...importantNote];
  if (importantNotearr) {
    importantNotearr.forEach((e) => {
      e.setAttribute("style", "width: 55vw");
    });
  }

  //Ajustamos el tamaño del contendor de textos en general
  let cardText = document.querySelectorAll('.cardText p');
  let cardTextarr = [...cardText];
  if (cardTextarr) {
    cardTextarr.forEach((e) => {
      e.setAttribute("style", "width: 60vw");
    });
  }
}

/////////////////////////////
//Menu lateral memoria
/////////////////////////////

/**
 * Lo que se hara es que el menu lateral recuerde el estado anterior
 * en el que se quedó.
 */

//Si no existe el valor en memoria lo establecemos
if (!localStorage.getItem("estadoMenuLateral")) {
  closeMenuButton.click(); //Hace que el menu se cierre la primera vez que se carga la pagina. Eso evita errores en moviles
  localStorage.setItem("estadoMenuLateral", "cerrado");
} else {
  revisarStateMenuLateral();
}

//Cada que presionemos en el menu el valor en memoria cambiara
closeMenuButton.addEventListener("click", () => {
  if (mainContainerElement.classList.contains("mainContainer")) {
    localStorage.setItem("estadoMenuLateral", "abierto");
  } else {
    localStorage.setItem("estadoMenuLateral", "cerrado");
  }
});

//En cuanto la pagina cargue debemos comprobar si el menu estaba cerrado o abierto
function revisarStateMenuLateral() {
  if (localStorage.getItem("estadoMenuLateral") === "abierto") {
    abrirMenu();
  } else {
    cerrarMenu();
  }
}
