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

      for (let dato in empresas[nombreEmpresa]) {
        const p = document.createElement("p");
        p.textContent = `${dato}: ${empresas[nombreEmpresa][dato]}`;
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
  const h1 = document.createElement("h1");
  h1.textContent = nombreEmpresa;

  const divDatos = document.createElement("div");
  const divDatosContainer = document.createElement("section");

  for (let dato in empresas[nombreEmpresa]) {
    const p = document.createElement("p");
    p.textContent = `${dato}: ${empresas[nombreEmpresa][dato]}`;
    divDatos.appendChild(p);
  }

  divDatosContainer.appendChild(h1);
  divDatosContainer.appendChild(divDatos);

  contenedor.appendChild(divDatosContainer);
}
