/**
 * Codigo para poder hacer reset a los zoom de los graficos
 */

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', () => {
      //Condicionales para estadisticas especificas
      if(razon_de_cobertura_de_interes_OBJ){
        razon_de_cobertura_de_interes_OBJ.resetZoom();
      }
    
      if(apalancamiento_sobre_activo_total_OBJ){
        apalancamiento_sobre_activo_total_OBJ.resetZoom();
      }
    
      if(linea_razon_de_cobertura_de_interes_OBJ){
        linea_razon_de_cobertura_de_interes_OBJ.resetZoom();
      }
    
      if(linea_apalancamiento_sobre_activo_total_OBJ){
        linea_apalancamiento_sobre_activo_total_OBJ.resetZoom();
      }
})