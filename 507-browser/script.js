$(document).ready(function () {

$('#onload').html('Página carregada');

$(window).scroll(() => {

  $('#scroll').html('Scroll Acionado');

})

$(window).resize(() => {

  $('#resize').html('Janela redimensionada').css('background-color', 'red');

})

$('#div1').scroll(e => {

  //console.log(e);
  //$(this).css('background-color', 'red');
  $(e.target).css('background-color', 'green');

})

})