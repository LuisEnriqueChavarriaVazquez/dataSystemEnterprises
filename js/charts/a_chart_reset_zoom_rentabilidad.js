/**
 * Codigo para poder hacer reset a los zoom de los graficos
 */

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', () => {
  if(margen_de_utilidad_OBJ){
    margen_de_utilidad_OBJ.resetZoom();
  }

  if(rendimientos_sobre_activos_totales_OBJ){
    rendimientos_sobre_activos_totales_OBJ.resetZoom();
  }

  if(rendimientos_sobre_capital_contable_OBJ){
    rendimientos_sobre_capital_contable_OBJ.resetZoom();
  }

  if(linea_margen_de_utilidad_OBJ){
    linea_margen_de_utilidad_OBJ.resetZoom();
  }

  if(linea_rendimientos_sobre_activos_totales_OBJ){
    linea_rendimientos_sobre_activos_totales_OBJ.resetZoom();
  }

  if(linea_rendimientos_sobre_capital_contable_OBJ){
    linea_rendimientos_sobre_capital_contable_OBJ.resetZoom();
  }
})