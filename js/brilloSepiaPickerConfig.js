//Accedemos a los range de sepia y de brillo
let sepiaPaginaRange = document.getElementById('sepiaPaginaRange');
let brilloPaginaRange = document.getElementById('brilloPaginaRange');

//Accedemos al cuerpo de la pagina
let cuerpoPagina = document.getElementById('cuerpoPagina');

//Verifcamos que el valor del tono sepia exista
let sepiaValue = localStorage.getItem('sepiaValue');

//En caso de que no exista
if (sepiaValue === null){
    localStorage.setItem('sepiaValue', '0.0');
    cuerpoPagina.setAttribute('style', 'filter: sepia(0.0);');
    sepiaValue = localStorage.getItem('sepiaValue');
}

//En caso de que el boton exista se debe actualizar el valor en tiempo real
if(sepiaPaginaRange !== null){
    
    //Debemos poner en la barra el valor actual
    let valorInputSepia = localStorage.getItem('sepiaValue') * 10;
    sepiaPaginaRange.value = valorInputSepia;
    
    //Debemos escuchar cuando el usario modifique el valor
    sepiaPaginaRange.addEventListener('change', () => {
        //Obtenemos el valor del input range
        let valorDeUsuarioSepia = sepiaPaginaRange.value;

        //Divimos la cantidad dada por el usuario para obtener decimales
        valorDeUsuarioSepia = valorDeUsuarioSepia/10;

        //Actualizamos el valor en memoria
        localStorage.setItem('sepiaValue', valorDeUsuarioSepia);

        //Obtenemos el nuevo valor de la memoria
        sepiaValue = localStorage.getItem('sepiaValue');

        //Aplicamos los estilos guardados en memoria
        cuerpoPagina.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    });

    //Aplicamos los estilos guardados en memoria
    cuerpoPagina.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
    
}else{ //En caso de que el boton de selección de sepia no exista solo se pone el valor en memoria

    //Aplicamos los estilos guardados en memoria
    cuerpoPagina.setAttribute('style', 'filter: sepia(' + sepiaValue + ') brightness(' + (1-(sepiaValue)) +');');
}
