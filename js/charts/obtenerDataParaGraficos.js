/**
 * Lo que esta funcion hace es guardar los datos en memoria que fueron obteneidos despues de la busqueda, 
 * pero los obtiene del JSON que estaba en local storage
 * 
 * Con esto se consigue guardarlos en arrays por separado.
 * 
 * Con lo que al final d¿se salvan recursos, teniendo cada dato en arrays mas ligeros en lugar de un obj json grande
 */

function guardarTodaLaDataEnArraysMemoria(){   

    //Accedemos a los datos de las empresas
    let datosEmpresaAlmacenados = localStorage.getItem('empresaConIndices');
    let datosJsonParaGrafica = JSON.parse(datosEmpresaAlmacenados);
    console.log('datosJsonParaGrafica: ', datosJsonParaGrafica);

    //Reservamos el espacio para los arrays de nombres de empresas
    let nombreEmpresaGraph = [];
    let rentabilidadEmpresaGraph = [];
    let endeudamientoEmpresaGraph = [];
    let rotacionEmpresaGraph = [];
    let liquidezEmpresaGraph = [];

    let rentabilidad_especifica = [];
    let endeudamiento_especifica = [];
    let rotacion_especifica = [];
    let liquidez_especifica = [];
    
    //Guardamos los datos provenientes del JSON que estaba en memoria
    for (let empresa in datosJsonParaGrafica) {
        if (datosJsonParaGrafica.hasOwnProperty(empresa)) {
            //Indices generales
            nombreEmpresaGraph.push(empresa);
            rentabilidadEmpresaGraph.push((datosJsonParaGrafica[empresa].rentabilidad));
            endeudamientoEmpresaGraph.push(datosJsonParaGrafica[empresa].endeudamiento);
            rotacionEmpresaGraph.push(datosJsonParaGrafica[empresa].rotacion);
            liquidezEmpresaGraph.push(datosJsonParaGrafica[empresa].liquidez);

            //Indices particulares... contiene un array con varios objetos dentro
            rentabilidad_especifica.push(datosJsonParaGrafica[empresa].indices_rentabilidad_especificos);
            endeudamiento_especifica.push(datosJsonParaGrafica[empresa].indices_endeudamiento_especificos);
            rotacion_especifica.push(datosJsonParaGrafica[empresa].indices_rotacion_especificos);
            liquidez_especifica.push(datosJsonParaGrafica[empresa].indices_liquidez_especificos);
        }
    }

    //Separamos los indices especificos en array particulares
    //(1) Indices de rentabilidad
    function separarIndicesRentabilidad(datos) {
        const margen_de_utilidad = [];
        const rendimientos_sobre_activos_totales = [];
        const rendimientos_sobre_capital_contable = [];
      
        for (let i = 0; i < datos.length; i++) {
          margen_de_utilidad.push(Number(datos[i].margen_de_utilidad));
          rendimientos_sobre_activos_totales.push(Number(datos[i].rendimientos_sobre_activos_totales));
          rendimientos_sobre_capital_contable.push(Number(datos[i].rendimientos_sobre_capital_contable));
        }
      
        return {
          margen_de_utilidad,
          rendimientos_sobre_activos_totales,
          rendimientos_sobre_capital_contable,
        };
    }
      
    let indicesSeparadosRentabilidad = separarIndicesRentabilidad(rentabilidad_especifica);
    localStorage.setItem("indicesSeparadosRentabilidad", JSON.stringify(indicesSeparadosRentabilidad));

    //(2) Indices de liquidez
    function separarIndicesLiquidez(datos) {
        const capital_de_trabajo = [];
        const capital_operativo = [];
        const prueba_del_acido = [];
        const razon_de_liquidez = [];
      
        for (let i = 0; i < datos.length; i++) {
          capital_de_trabajo.push(Number(datos[i].capital_de_trabajo));
          capital_operativo.push(Number(datos[i].capital_operativo));
          prueba_del_acido.push(Number(datos[i].prueba_del_acido));
          razon_de_liquidez.push(Number(datos[i].razon_de_liquidez));
        }
      
        return {
          capital_de_trabajo,
          capital_operativo,
          prueba_del_acido,
          razon_de_liquidez,
        };
    }
      
    let indicesSeparadosLiquidez = separarIndicesLiquidez(liquidez_especifica);
    localStorage.setItem("indicesSeparadosLiquidez", JSON.stringify(indicesSeparadosLiquidez));

    //(3) Indices de endeudamiento
    function separarIndicesEndeudamiento(datos) {
        const razon_de_cobertura_de_interes = [];
        const apalancamiento_sobre_activo_total = [];
        
        for (let i = 0; i < datos.length; i++) {
            razon_de_cobertura_de_interes.push(Number(datos[i].razon_de_cobertura_de_interes));
            apalancamiento_sobre_activo_total.push(Number(datos[i].apalancamiento_sobre_activo_total));
        }
        
        return {
            razon_de_cobertura_de_interes,
            apalancamiento_sobre_activo_total,
        };
    }
        
    let indicesSeparadosEndeudamiento = separarIndicesEndeudamiento(endeudamiento_especifica);
    localStorage.setItem("indicesSeparadosEndeudamiento", JSON.stringify(indicesSeparadosEndeudamiento));

    //(4) Indices de rotacion
    function separarIndicesRotacion(datos) {
        const rotacion_de_activos_fijos = [];
        const rotacion_de_activos_totales = [];
        const rotacion_de_cuentas_por_cobrar = [];
        const rotacion_de_inventarios = [];
      
        for (let i = 0; i < datos.length; i++) {
          rotacion_de_activos_fijos.push(Number(datos[i].rotacion_de_activos_fijos));
          rotacion_de_activos_totales.push(Number(datos[i].rotacion_de_activos_totales));
          rotacion_de_cuentas_por_cobrar.push(Number(datos[i].rotacion_de_cuentas_por_cobrar));
          rotacion_de_inventarios.push(Number(datos[i].rotacion_de_inventarios));
        }
      
        return {
          rotacion_de_activos_fijos,
          rotacion_de_activos_totales,
          rotacion_de_cuentas_por_cobrar,
          rotacion_de_inventarios,
        };
    }
      
    let indicesSeparadosRotacion = separarIndicesRotacion(rotacion_especifica);
    localStorage.setItem("indicesSeparadosRotacion", JSON.stringify(indicesSeparadosRotacion));
    
    //Guardamos indices generales en memoria
    localStorage.setItem("nombreEmpresaGraph", nombreEmpresaGraph);
    localStorage.setItem("rentabilidadEmpresaGraph", "[" + rentabilidadEmpresaGraph + "]");
    localStorage.setItem("endeudamientoEmpresaGraph", "[" + endeudamientoEmpresaGraph + "]");
    localStorage.setItem("rotacionEmpresaGraph", "[" + rotacionEmpresaGraph + "]");
    localStorage.setItem("liquidezEmpresaGraph", "[" + liquidezEmpresaGraph + "]");

    //Si quieres imprimir los datos de indices especificos hazle asi
    console.log("Margen de Utilidad:", indicesSeparadosRentabilidad.rendimientos_sobre_capital_contable);

    //Si quieres imprimir nombres hazlo asi
    let exampleNombres = localStorage.getItem('nombreEmpresaGraph').split(",");
    console.log(exampleNombres);

    //Si quieres imprimir numeros hazlo asi...
    console.log(JSON.parse(localStorage.getItem('endeudamientoEmpresaGraph')));
}



//Llamamos a la funcion para que guarde todo en memoria
guardarTodaLaDataEnArraysMemoria();