//Estilos del input
$(document).ready(function () {
  var select = $("select[multiple]");
  var options = select.find("option");

  var div = $("<div />").addClass("selectMultiple");
  var active = $("<div />");
  var list = $('<ul id="lista_empresa" />');
  var placeholder = select.data("placeholder");

  var span = $("<span />").text(placeholder).appendTo(active);

  options.each(function () {
    var text = $(this).text();
    if ($(this).is(":selected")) {
      active.append($("<a />").html("<em>" + text + "</em><i></i>"));
      span.addClass("hide");
    } else {
      list.append($("<li />").html(text));
    }
  });

  active.append($("<div />").addClass("arrow").attr('id', 'buttonArrow'));
  div.append(active).append(list);

  select.wrap(div);

  $(document).on("click", ".selectMultiple ul li", function (e) {
    var select = $(this).parent().parent();
    var li = $(this);
    if (!select.hasClass("clicked")) {
      select.addClass("clicked");
      li.prev().addClass("beforeRemove");
      li.next().addClass("afterRemove");
      li.addClass("remove");
      var a = $("<a />")
        .addClass("notShown")
        .html("<em>" + li.text() + "</em><i></i>")
        .hide()
        .appendTo(select.children("div"));
      a.slideDown(350, function () {
        setTimeout(function () {
          a.addClass("shown");
          select.children("div").children("span").addClass("hide");
          select
            .find("option:contains(" + li.text() + ")")
            .prop("selected", true);
        }, 200);
      });
      setTimeout(function () {
        if (li.prev().is(":last-child")) {
          li.prev().removeClass("beforeRemove");
        }
        if (li.next().is(":first-child")) {
          li.next().removeClass("afterRemove");
        }
        setTimeout(function () {
          li.prev().removeClass("beforeRemove");
          li.next().removeClass("afterRemove");
        }, 200);

        li.slideUp(350, function () {
          li.remove();
          select.removeClass("clicked");
        });
      }, 200);
    }
  });

  $(document).on("click", ".selectMultiple > div a", function (e) {
    var select = $(this).parent().parent();
    var self = $(this);
    self.removeClass().addClass("remove");
    select.addClass("open");
    setTimeout(function () {
      self.addClass("disappear");
      setTimeout(function () {
        self.animate(
          {
            width: 0,
            height: 0,
            padding: 0,
            margin: 0,
          },
          300,
          function () {
            var li = $("<li />")
              .text(self.children("em").text())
              .addClass("notShown")
              .appendTo(select.find("ul"));
            li.slideDown(400, function () {
              li.addClass("show");
              setTimeout(function () {
                select
                  .find("option:contains(" + self.children("em").text() + ")")
                  .prop("selected", false);
                if (!select.find("option:selected").length) {
                  select.children("div").children("span").removeClass("hide");
                }
                li.removeClass();
              }, 400);
            });
            self.remove();
          }
        );
      }, 300);
    }, 400);
  });

  $(document).on(
    "click",
    ".selectMultiple > div .arrow, .selectMultiple > div span",
    function (e) {
      $(this).parent().parent().toggleClass("open");
    }
  );
});

//Accedemos a los datos de nombre de empresas...
let url_nombre_empresa_income =
  "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/datos/nombre_extraidos_income_statement.json";
let url_nombre_balance_sheet =
  "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/datos/nombres_extraidos_balance_sheet.json";
let url_nombres_solos =
  "https://raw.githubusercontent.com/LuisEnriqueChavarriaVazquez/getInvestingServiceData/main/datos/nombres_extraidos_solos.json";

//Arrays para almacenado de nombres
let array_income = "";
let array_balance_sheet = "";
let array_nombres_solos = "";
let array_nombres_solos_sinOrdenar = "";

//Los siguiente fetch son para jalar los datos de la empresa
fetch(url_nombre_empresa_income)
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes trabajar con los datos obtenidos del archivo JSON
    // Extraer el array de nombres_extraidos_balance_sheet
    array_income = data.nombres_extraidos_income_statement;
  })
  .catch((error) => {
    console.error("Error al obtener el archivo JSON de income:", error);
  });

fetch(url_nombre_balance_sheet)
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes trabajar con los datos obtenidos del archivo JSON
    // Extraer el array de nombres_extraidos_balance_sheet
    array_balance_sheet = data.nombres_extraidos_balance_sheet;
  })
  .catch((error) => {
    console.error("Error al obtener el archivo JSON de balance:", error);
  });

fetch(url_nombres_solos)
  .then((response) => response.json())
  .then((data) => {
    // Aquí puedes trabajar con los datos obtenidos del archivo JSON
    // Extraer el array de nombres_extraidos
    array_nombres_solos = data.nombres_extraidos;
    array_nombres_solos = array_nombres_solos.sort();
  })
  .catch((error) => {
    console.error("Error al obtener el archivo JSON de balance:", error);
  });

//////////////////
//Metemos las opciones de las empresas (Metemos los nombres de empresa en el buscador)
setTimeout(() => {
  let selectorOpciones = document.getElementById("test");
  let lista_empresa = document.getElementById("lista_empresa");
  //console.log(array_income);
  //console.log(array_balance_sheet);
  //console.log(array_nombres_solos);

  //findCompanyWithFlagEmoji es una función ubicada en el archivo en buscadores/agregarBanderasBuscador.js
  array_nombres_solos.forEach((nombre_empresa) => {
    if(nombre_empresa.includes('?cid') != true){
      selectorOpciones.innerHTML += `
      <option value="${nombre_empresa}">${findCompanyWithFlagEmoji(nombre_empresa)}</option>
      `;
    } 
  });

  array_nombres_solos.forEach((nombre_empresa) => {
    lista_empresa.innerHTML += `
        <li>${findCompanyWithFlagEmoji(nombre_empresa)}</li>
      `;
  });
}, 500);

///////////////////
//Accedemos al contenedor del buscador para poder hacer que cambie con el scroll
let inputBrowser_empresas = document.getElementById('inputBrowser_empresas');
contenidoPrincipal.addEventListener('scroll', function() {
    var scrollPosition = contenidoPrincipal.scrollTop; //Position actual de scroll en div
    var scrollHeight = contenidoPrincipal.scrollHeight; //altura total de la caja de contenido con scroll
    var clientHeight = contenidoPrincipal.clientHeight; //altura total de la caja sin scroll (solo visible)
  
    //Cuando hallamos recorrido una distancia igual a la altura visible
    //console.log('scrollPosition: ', scrollPosition);
    if (scrollPosition > clientHeight) {
        inputBrowser_empresas.classList.add('fixedBrowser');
    }else if(scrollPosition <= 200){
        inputBrowser_empresas.classList.remove('fixedBrowser');
    }
});

