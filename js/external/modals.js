//El framework es sweet alert https://sweetalert.js.org/docs/

/**
 * Rotacion
 */

let buttonSectionOne = document.getElementById("buttonModalOne-rotacion");
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
      }
    ])
    .then((result) => {
      if (result.value) {
        const answers = result.value;
        Swal.fire({
          title: "Resultado",
          html: `
                Rotación de cuentas por cobrar:
                ${((parseInt(answers[0]) + parseInt(answers[1]))/2)/(parseInt(answers[2])/parseInt(answers[3]))} días.
            `,
          confirmButtonText: "Cerrar",
        });
      }
    });
});


let buttonSectionTwo = document.getElementById("buttonModalTwo-rotacion");
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
      }
    ])
    .then((result) => {
      if (result.value) {
        const answers = result.value;
        Swal.fire({
          title: "Resultado",
          html: `
                Rotación de cuentas por cobrar:
                ${((parseInt(answers[0]) + parseInt(answers[1]))/2)/(parseInt(answers[2])/parseInt(answers[3]))} días.
            `,
          confirmButtonText: "Cerrar",
        });
      }
    });
});

let buttonSectionThree = document.getElementById("buttonModalThree-rotacion");
buttonSectionThree.addEventListener("click", () => {
  Swal.mixin({
    input: "text",
    confirmButtonText: "Siguiente →",
    showCancelButton: true,
    progressSteps: ["1", "2"]
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
                ${(parseInt(answers[0])/parseInt(answers[1]))} veces.
            `,
          confirmButtonText: "Cerrar",
        });
      }
    });
});

let buttonSectionFour = document.getElementById("buttonModalFour-rotacion");
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
                ${(parseInt(answers[0])/parseInt(answers[1]))} veces.
            `,
          confirmButtonText: "Cerrar",
        });
      }
    });
});
