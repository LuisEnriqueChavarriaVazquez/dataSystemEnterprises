/**
 * Codigo para poder hacer reset a los zoom de los graficos
 */

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', () => {
  //Condicionales de las linea de graficas
  if(barras_rentabilidad_OBJ){
    barras_rentabilidad_OBJ.resetZoom();
  }

  if(barras_liquidez_OBJ){
    barras_liquidez_OBJ.resetZoom();
  }

  if(barras_rotacion_OBJ){
    barras_rotacion_OBJ.resetZoom();
  }

  if(barras_endeudamiento_OBJ){
    barras_endeudamiento_OBJ.resetZoom();
  }

  //Condicionales para el reset de las lineas
  if(linea_liquidez_OBJ){
    linea_liquidez_OBJ.resetZoom();
  }

  if(linea_rotacion_OBJ){
    linea_rotacion_OBJ.resetZoom();
  }

  if(linea_endeudamiento_OBJ){
    linea_endeudamiento_OBJ.resetZoom();
  }

  if(linea_rentabilidad_OBJ){
    linea_rentabilidad_OBJ.resetZoom();
  }
})