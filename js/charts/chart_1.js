
let empresas = JSON.parse(localStorage.getItem("empresaConIndices"));
const contenedor = document.getElementById("contenedor");

window.addEventListener("storage", function(event) {
  if (event.key === "empresaConIndices") {
      empresas = JSON.parse(event.newValue);

      for (let nombreEmpresa in empresas) {
        
        const h1 = document.createElement("h1");
        h1.textContent = nombreEmpresa;
    
       
        const divDatos = document.createElement("div");
    
        
        for (let dato in empresas[nombreEmpresa]) {
            const p = document.createElement("p");
            p.textContent = `${dato}: ${empresas[nombreEmpresa][dato]}`;
            divDatos.appendChild(p);
        }
    
        
        contenedor.appendChild(h1);
        contenedor.appendChild(divDatos);
    }
      

  }
});




for (let nombreEmpresa in empresas) {
    // Crea un elemento h1 para el nombre de la empresa
    const h1 = document.createElement("h1");
    h1.textContent = nombreEmpresa;

    // Crea un div para los datos financieros
    const divDatos = document.createElement("div");

    // Itera sobre cada dato financiero y crea un párrafo para cada uno
    for (let dato in empresas[nombreEmpresa]) {
        const p = document.createElement("p");
        p.textContent = `${dato}: ${empresas[nombreEmpresa][dato]}`;
        divDatos.appendChild(p);
    }

    // Añade el h1 y el div de datos al contenedor principal
    contenedor.appendChild(h1);
    contenedor.appendChild(divDatos);
}


// const chart_1 = document.getElementById("chart_1");

// new Chart(chart_1, {
//   type: "bar",
//   data: {
//     labels: ["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5", "Empresa 6"],
//     datasets: [
//       {
//         label: "Puntos del ranking",
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1,
//         backgroundColor: backgroundColor_dinamico,
//         borderColor: borderColor_dinamico,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });







