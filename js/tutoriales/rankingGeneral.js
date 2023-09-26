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
let closeMenu3 = document.getElementById('select-default');

// Define the steps for introduction
driver.defineSteps([
  {
    element: '#a1tutorialButton',
    popover: {
      className: 'first-step-popover-class',
      title: 'Inicio',
      description: 'En esta sección podrá elegir la empresa que desea analizar',
      position: 'right' 
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Ranking general',
      description: 'En esta sección una vez que haya seleccionado la empresa de su gusto, podrá ver el ranking e índices de empresas.',
      position: 'right'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Rankings especificos',
      description: 'En esta otra sección podra ver los diversos índices de forma más específica.',
      position: 'right'
    }
  },
  {
    element: '#a4tutorialButton',
    popover: {
      title: 'Información',
      description: 'En esta sección podrá encontrar datos sobre cada uno de los índices y calculadoras para cada uno de ellos.',
      position: 'right'
    }
  },
  {
    element: '#a5tutorialButton',
    popover: {
      title: 'Configuración',
      description: 'Puede personalizar su experiencia en la plataforma en la sección de configuración.',
      position: 'right'
    }
  },
  {
    element: '#a6tutorialButton',
    onNext: () => {
      closeMenu3.click();
    },
    popover: {
      title: 'Manual',
      description: 'En esta pestaña podrá ver con más detalle el manual de usuario.',
      position: 'right'
    }
  },
  {
    element: '#select-default',
    popover: {
      title: 'Selector de tipo de gráfico',
      description: 'Este boton permite hacer una selección del tipo de gráfico deseado',
      position: 'left'
    }
  },
  {
    element: '#btnGridVista',
    popover: {
      title: 'Botón de cuadrícula',
      description: 'Este botón da la posibilidad de ver las gráficas en modo cuadrícula',
      position: 'bottom'
    }
  },
  {
    element: '#btnListaVista',
    popover: {
      title: 'Botón de lista',
      description: 'Con este botón se pueden ver los elementos en modo de lista.',
      position: 'bottom'
    }
  },
  {
    element: '#btnReset',
    popover: {
      title: 'Botón de reinicio',
      description: 'Puede reiniciar el zoom de los gráficos con este boton.',
      position: 'bottom'
    }
  }
]);

//Activamos el tutorial cuando presionamos el boton
buttonHelp.addEventListener('click', () => {
    // Start the introduction
    driver.start();
})