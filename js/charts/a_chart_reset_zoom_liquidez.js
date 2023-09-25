/**
 * Codigo para poder hacer reset a los zoom de los graficos
 */

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', () => {
    if(capital_de_trabajo_OBJ){
      capital_de_trabajo_OBJ.resetZoom();
    }
  
    if(capital_operativo_OBJ){
      capital_operativo_OBJ.resetZoom();
    }
  
    if(prueba_del_acido_OBJ){
      prueba_del_acido_OBJ.resetZoom();
    }
  
    if(razon_de_liquidez_OBJ){
      razon_de_liquidez_OBJ.resetZoom();
    }
  
    if(linea_capital_de_trabajo_OBJ){
      linea_capital_de_trabajo_OBJ.resetZoom();
    }
  
    if(linea_capital_operativo_OBJ){
      linea_capital_operativo_OBJ.resetZoom();
    }
  
    if(linea_prueba_del_acido_OBJ){
      linea_prueba_del_acido_OBJ.resetZoom();
    }
  
    if(linea_razon_de_liquidez_OBJ){
      linea_razon_de_liquidez_OBJ.resetZoom();
    }
})