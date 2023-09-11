
let empresas = JSON.parse(localStorage.getItem("empresaConIndices"));
const contenedor = document.getElementById("contenedor");

//actualizar datos dependiendo de las empresas que el usuario seleccione
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


//Datos iniciales en la pagina

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