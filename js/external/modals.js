//El framework es sweet alert https://sweetalert.js.org/docs/

/**
 * Rotacion
 */

let buttonSectionOne = document.getElementById("buttonModalOne-rotacion");
if (buttonSectionOne) {
  buttonSectionOne.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4"],
    })
      .queue([
        {
          title: "Cuentas por cobrar al inicio",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Cuentas por cobrar al final",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Duración del periodo",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${
              (parseInt(answers[0]) + parseInt(answers[1])) /
              2 /
              (parseInt(answers[2]) / parseInt(answers[3]))
            } días.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwo = document.getElementById("buttonModalTwo-rotacion");
if (buttonSectionTwo) {
  buttonSectionTwo.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2", "3", "4"],
    })
      .queue([
        {
          title: "Inventario inicial",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Inventario final",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Costo de ventas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Duración del periodo en días",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
                Rotación de cuentas por cobrar:
                ${
                  (parseInt(answers[0]) + parseInt(answers[1])) /
                  2 /
                  (parseInt(answers[2]) / parseInt(answers[3]))
                } días.
                `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionThree = document.getElementById("buttonModalThree-rotacion");
if (buttonSectionThree) {
  buttonSectionThree.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activos fijos promedio",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${parseInt(answers[0]) / parseInt(answers[1])} veces.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionFour = document.getElementById("buttonModalFour-rotacion");
if (buttonSectionFour) {
  buttonSectionFour.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activo total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
          Rotación de cuentas por cobrar:
                ${parseInt(answers[0]) / parseInt(answers[1])} veces.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

/**
 * Botones de rentabilidad
 */

let buttonSectionOneRentabilidad = document.getElementById(
  "buttonModalOne-rentabilidad"
);
if (buttonSectionOneRentabilidad) {
  buttonSectionOneRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Ventas netas",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
          Rotación de cuentas por cobrar:
          ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
          `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwoRentabilidad = document.getElementById(
  "buttonModalTwo-rentabilidad"
);
if (buttonSectionTwoRentabilidad) {
  buttonSectionTwoRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Activo total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionThreeRentabilidad = document.getElementById(
  "buttonModalThree-rentabilidad"
);
if (buttonSectionThreeRentabilidad) {
  buttonSectionThreeRentabilidad.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad neta",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Capital contable",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

/**
 * Botones de endeudamiento
 */

let buttonSectionOneEndeudamiento = document.getElementById(
  "buttonModalOne-endeudamiento"
);

if (buttonSectionOneEndeudamiento) {
  buttonSectionOneEndeudamiento.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Pasivo total",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Deuda total",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
            Rotación de cuentas por cobrar:
            ${(parseInt(answers[0]) / parseInt(answers[1])) * 100} %.
            `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}

let buttonSectionTwoEndeudamiento = document.getElementById(
  "buttonModalTwo-endeudamiento"
);

if (buttonSectionTwoEndeudamiento) {
  buttonSectionTwoEndeudamiento.addEventListener("click", () => {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Siguiente →",
      showCancelButton: true,
      progressSteps: ["1", "2"],
    })
      .queue([
        {
          title: "Utilidad de operación",
          text: "Ingrese los valores en el input",
        },
        {
          title: "Intereses",
          text: "Ingrese los valores en el input",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = result.value;
          Swal.fire({
            title: "Resultado",
            html: `
              Rotación de cuentas por cobrar:
              ${parseInt(answers[0]) / parseInt(answers[1])} veces.
              `,
            confirmButtonText: "Cerrar",
          });
        }
      });
  });
}
