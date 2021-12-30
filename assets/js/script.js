


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function(){    

    $(".blue-div").dblclick(function(){
    $(this).addClass('div-negro');
        });
   
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
    