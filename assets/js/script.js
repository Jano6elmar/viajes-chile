

//Integración de tooltip usado en la sección quienes somos y destacados
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//cambios interactivos en el documento hmtl
$(document).ready(function(){
    //cambio de color de los div de los icons de la sección quienes somos
    $(".blue-div").dblclick(function(){
        $(this).addClass('div-negro');
    });
    //para ocultar los parrafos de la sección quienes somos
    $("#icon1").click(function(){
        $("#parrafo1").toggle( );         
    });
    $("#icon2").click(function(){
        $("#parrafo2").toggle( );         
    });
    $("#icon3").click(function(){
        $("#parrafo3").toggle( );         
    });
})
    