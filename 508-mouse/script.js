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

$('#btn1').mousedown(() => {

  $('#div2').css('background-color', 'green');

})

$('#btn1').click(() => { //mouseup() e click() são similares

  $('#div2').css('background-color', 'pink');

})

$('#btn2').dblclick(() => {

  $('#div2').css('background-color', 'purple');

})

$('#div2').mousemove(e => {

  console.log(e.offsetX, e.offsetY);
  $('#resultadoDiv').html('X: ' + e.offsetX + ' | Y: ' + e.offsetY)

})

})