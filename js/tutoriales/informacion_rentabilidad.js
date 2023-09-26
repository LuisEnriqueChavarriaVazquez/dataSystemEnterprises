var driver = new Driver({
    allowClose: false,
    showButtons: true,         
    closeBtnText: 'Cerrar',      
    nextBtnText: 'Siguiente',
    prevBtnText: 'Anterior',   
    keyboardControl: true,
    opacity: .2,
    stageBackground:"rgb(255,255,255,.01)"
});

//Accedemos al boton de ayuda
let buttonHelp = document.getElementById('buttonComputerHelp');
//Boton del menu lateral
let closeMenu3 = document.getElementById('a4tutorialButton');
let closeMenu4 = document.getElementById('buttonModalOne-rentabilidad');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Volver a la sección anterior',
      description: 'Este botón sirve para volver a la sección anterior.',
      position: 'right' 
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Configuración',
      description: 'En esta sección podrá ir a la configuración del sistema.',
      position: 'right'
    }
  },
  {
    element: '#a3tutorialButton',
    onNext: () => {
      closeMenu3.click();
    },
    popover: {
      title: 'Manual de usuario',
      description: 'Si desea acceder al manual de usuario, presione este botón.',
      position: 'right'
    }
  },
  {
    element: '#a4tutorialButton',
    onNext: () => {
      closeMenu4.click();
    },
    popover: {
      title: 'Apartados de información',
      description: 'Puede acceder a cada uno de los contenidos presionando o dando click en los apartados.',
      position: 'bottom'
    }
  },
  {
    element: '#buttonModalOne-rentabilidad',
    popover: {
      title: 'Calcular valores',
      description: 'Este botón sirve para hacer cálculos en cada apartado.',
      position: 'right'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})