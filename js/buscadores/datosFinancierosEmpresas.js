let empresas = JSON.parse(localStorage.getItem("empresaConIndices"));
const contenedor = document.getElementById("contenedor");

//actualizar datos dependiendo de las empresas que el usuario seleccione
window.addEventListener("storage", function (event) {
  if (event.key === "empresaConIndices") {
    empresas = JSON.parse(event.newValue);

    for (let nombreEmpresa in empresas) {
      const h1 = document.createElement("h1");
      h1.textContent = nombreEmpresa;

      const divDatos = document.createElement("div");
      const divDatosContainer = document.createElement("section");

    //Hacemos iteraciones para los datos de indices generales
    let contadorIteraciones = 0;

    for (let dato in empresas[nombreEmpresa]) {
      if(contadorIteraciones <= 3){
        const p = document.createElement("p");
        p.innerHTML = `<b><i>Índice general de ${dato}: </i></b> ${empresas[nombreEmpresa][dato]}`;
        divDatos.appendChild(p);
        contadorIteraciones++;
      }else{
        contadorIteraciones = 0;
        break;
      }
    }

    // Acceder a los índices específicos y mostrarlos
    const indicesEspecificosRentabilidad = empresas[nombreEmpresa].indices_rentabilidad_especificos;
    const indicesEspecificosLiquidez = empresas[nombreEmpresa].indices_liquidez_especificos;
    const indicesEspecificosEndeudamiento = empresas[nombreEmpresa].indices_endeudamiento_especificos;
    const indicesEspecificosRotacion = empresas[nombreEmpresa].indices_rotacion_especificos;

    for (let indice in indicesEspecificosRentabilidad) {
      const p = document.createElement("p");
      p.innerHTML = `<b><i>Rentabilidad ${indice}: </i></b> ${indicesEspecificosRentabilidad[indice] || 0}`;
      divDatos.appendChild(p);
    }

    for (let indice in indicesEspecificosLiquidez) {
      const p = document.createElement("p");
      p.innerHTML = `<b><i>Liquidez ${indice}: </i></b> ${indicesEspecificosLiquidez[indice] || 0}`;
      divDatos.appendChild(p);
    }

    for (let indice in indicesEspecificosEndeudamiento) {
      const p = document.createElement("p");
      p.innerHTML = `<b><i>Endeudamiento ${indice}: </i></b> ${indicesEspecificosEndeudamiento[indice] || 0}`;
      divDatos.appendChild(p);
    }

    for (let indice in indicesEspecificosRotacion) {
      const p = document.createElement("p");
      p.innerHTML = `<b><i>Rotación ${indice}: </i></b> ${indicesEspecificosRotacion[indice] || 0}`;
      divDatos.appendChild(p);
    }


      divDatosContainer.appendChild(h1);
      divDatosContainer.appendChild(divDatos);

      contenedor.appendChild(divDatosContainer);
    }
  }
});

//Datos iniciales en la pagina
for (let nombreEmpresa in empresas) {
  let h1 = document.createElement("h1");
  h1.textContent = nombreEmpresa;
  
  let divDatos = document.createElement("div");
  let divDatosContainer = document.createElement("section");

  //Hacemos iteraciones para los datos de indices generales
  let contadorIteraciones = 0;

  for (let dato in empresas[nombreEmpresa]) {
    if(contadorIteraciones <= 3){
      const p = document.createElement("p");
      p.innerHTML = `<b><i>Índice general de ${dato}: </i></b> ${empresas[nombreEmpresa][dato]}`;
      divDatos.appendChild(p);
      contadorIteraciones++;
    }else{
      contadorIteraciones = 0;
      break;
    }
  }

  // Acceder a los índices específicos y mostrarlos
  const indicesEspecificosRentabilidad = empresas[nombreEmpresa].indices_rentabilidad_especificos;
  const indicesEspecificosLiquidez = empresas[nombreEmpresa].indices_liquidez_especificos;
  const indicesEspecificosEndeudamiento = empresas[nombreEmpresa].indices_endeudamiento_especificos;
  const indicesEspecificosRotacion = empresas[nombreEmpresa].indices_rotacion_especificos;

  for (let indice in indicesEspecificosRentabilidad) {
    const p = document.createElement("p");
    p.innerHTML = `<b><i>Rentabilidad ${indice}: </i></b> ${indicesEspecificosRentabilidad[indice] || 0}`;
    divDatos.appendChild(p);
  }

  for (let indice in indicesEspecificosLiquidez) {
    const p = document.createElement("p");
    p.innerHTML = `<b><i>Liquidez ${indice}: </i></b> ${indicesEspecificosLiquidez[indice] || 0}`;
    divDatos.appendChild(p);
  }

  for (let indice in indicesEspecificosEndeudamiento) {
    const p = document.createElement("p");
    p.innerHTML = `<b><i>Endeudamiento ${indice}: </i></b> ${indicesEspecificosEndeudamiento[indice] || 0}`;
    divDatos.appendChild(p);
  }

  for (let indice in indicesEspecificosRotacion) {
    const p = document.createElement("p");
    p.innerHTML = `<b><i>Rotación ${indice}: </i></b> ${indicesEspecificosRotacion[indice] || 0}`;
    divDatos.appendChild(p);
  }

  

  //Iteraciones para los indices particulares

  divDatosContainer.appendChild(h1);
  divDatosContainer.appendChild(divDatos);

  contenedor.appendChild(divDatosContainer);
}
