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
let closeMenu2 = document.getElementById('closeMenu');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Colores',
      description: 'En esta sección podrá configurar la paleta de colores del sistema.',
      position: 'right' 
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Fuente',
      description: 'En esta sección podrá elegir la fuente que le sea más cómoda.',
      position: 'right' 
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Lectura',
      description: 'En esta sección podrá optar por el modo oscuro ó una modalidad sepia.',
      position: 'right' 
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Accesibilidad',
      description: 'En esta sección podrá elegir tonalidades y paleta para trastornos del sistema visual.',
      position: 'right' 
    }
  },
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})