// URL del archivo HTML en GitHub (crudo/raw)
var url =
  "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/intel-corp-balance-sheet.html";
var url_two =
  "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/generatedFiles/intel-corp-income-statement.html";

// Realizar la solicitud GET al archivo HTML
fetch(url)
  .then((response) => response.text())
  .then((html) => {
    // Acceder al contenido del archivo HTML
    document.getElementById("balance_sheet").innerHTML = html;
  })
  .catch((error) => {
    console.error("Recurso no disponible:", error);
  });

fetch(url_two)
  .then((response) => response.text())
  .then((html) => {
    // Acceder al contenido del archivo HTML
    document.getElementById("income_statement").innerHTML = html;
  })
  .catch((error) => {
    console.error("Recurso no disponible:", error);
  });
