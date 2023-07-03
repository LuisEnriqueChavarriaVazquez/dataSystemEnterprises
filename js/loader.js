// Ocultar el loader
function hideLoader() {

    setTimeout(() => {
        let loader = document.getElementById('loader');
        loader.style.display = 'none';
    }, 1000)

}
  
// Evento de carga de la página
window.addEventListener('load', function() {
    hideLoader(); // Ocultar el loader una vez que la página ha cargado completamente
});