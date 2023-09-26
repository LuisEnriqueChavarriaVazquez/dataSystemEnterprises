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
      title: 'Botón de índices de endeudamiento',
      description: 'Acceda a los índices de endeudamiento.',
      position: 'right' 
    }
  },
  {
    element: '#a2tutorialButton',
    popover: {
      title: 'Botón de índices de liquidez',
      description: 'Acceda a los índices de liquidez.',
      position: 'right'
    }
  },
  {
    element: '#a3tutorialButton',
    popover: {
      title: 'Botón de índices de rentabilidad',
      description: 'Acceda a los índices de rentabilidad.',
      position: 'right'
    }
  },
  {
    element: '#a4tutorialButton',
    onNext: () => {
      closeMenu3.click();
    },
    popover: {
      title: 'Botón de índices de rotación',
      description: 'Acceda a los índices de rotación.',
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