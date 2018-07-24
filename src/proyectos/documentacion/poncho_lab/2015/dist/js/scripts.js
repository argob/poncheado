$(function(){

var titulo = $("main h1").html();
$("title").html(titulo);

  $(".chosen-select").chosen({
    width: '100%',
    disable_search: true
  });

  $(".mensajeError").click(function(){
    status = $(this).attr("data-mostrar");


    if(status == "true"){
      $(".mensajeError").html("Ocultar mensajes de error");
      $(".mensajeError").attr("data-mostrar",false);
      $('.error').removeClass("hidden");
      $('.item-form').addClass('has-error has-feedback');
    }
    else{
      $(".mensajeError").html("Ver mensajes de error");
      $(".mensajeError").attr("data-mostrar",true);
      $('.error').addClass("hidden");
      $('.item-form').removeClass('has-error has-feedback');
    }

  })

  $('input.conError:radio').change(function(){
    if($(this).is(":checked")) {
      $('.error').removeClass("hidden");
      $('.item-form').addClass('has-error has-feedback');
    }
  });
  $('input.sinError:radio').change(function(){
    if($(this).is(":checked")) {
      $('.error').addClass("hidden");
      $('.item-form').removeClass('has-error has-feedback');
    }
  });

});