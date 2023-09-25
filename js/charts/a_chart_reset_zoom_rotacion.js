/**
 * Codigo para poder hacer reset a los zoom de los graficos
 */

let btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', () => {
  if(rotacion_de_activos_fijos_OBJ){
    rotacion_de_activos_fijos_OBJ.resetZoom();
  }

  if(rotacion_de_activos_totales_OBJ){
    rotacion_de_activos_totales_OBJ.resetZoom();
  }

  if(rotacion_de_cuentas_por_cobrar_OBJ){
    rotacion_de_cuentas_por_cobrar_OBJ.resetZoom();
  }

  if(rotacion_de_inventarios_OBJ){
    rotacion_de_inventarios_OBJ.resetZoom();
  }

  if(linea_rotacion_de_activos_fijos_OBJ){
    linea_rotacion_de_activos_fijos_OBJ.resetZoom();
  }

  if(linea_rotacion_de_activos_totales_OBJ){
    linea_rotacion_de_activos_totales_OBJ.resetZoom();
  }

  if(linea_rotacion_de_cuentas_por_cobrar_OBJ){
    linea_rotacion_de_cuentas_por_cobrar_OBJ.resetZoom();
  }

  if(linea_rotacion_de_inventarios_OBJ){
    linea_rotacion_de_inventarios_OBJ.resetZoom();
  }
})