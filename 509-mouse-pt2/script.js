//////////////////////////////////////////////////////////////
////////////////      Eventos do Browser      ////////////////
//////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////
////////////////  Eventos do Mouse - Parte 1  ////////////////
//////////////////////////////////////////////////////////////

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
  $('#resultadoDiv').html('X: ' + e.offsetX + ' | Y: ' + e.offsetY);

})

//////////////////////////////////////////////////////////////
////////////////  Eventos do Mouse - Parte 2  ////////////////
//////////////////////////////////////////////////////////////
/*----------------------------------------------------------*/
//////////////////////////////////////////////////////////////
////////  mouseover() | mouseout() -> (Mais Antigos)  ////////
//////////////////////////////////////////////////////////////

/*
$('#divExterna').mouseover(() => {

  $('#resultadoDivExterna').html('Entrou');

})

$('#divExterna').mouseout(() => {

  $('#resultadoDivExterna').html('Saiu');

})
*/

//////////////////////////////////////////////////////////////
//////  mouseenter() | mouseleave() -> (Mais Recentes)  //////
//////////////////////////////////////////////////////////////
/*
$('#divExterna').mouseenter(() => {

  $('#resultadoDivExterna').html('Entrou');

})

$('#divExterna').mouseleave(() => {

  $('#resultadoDivExterna').html('Saiu');

})
*/

//////////////////////////////
//////      TESTES      //////
//////////////////////////////
//////     OVER/OUT     //////
//////////////////////////////

/*
$('#divExterna').mouseover(() => {

  $('#resultadoDivExterna').html('Entrou');
  console.log('Div Externa (entrou)');

})

$('#divExterna').mouseout(() => {

  $('#resultadoDivExterna').html('Saiu');
  console.log('Div Externa (saiu)');

})

$('#divInterna').mouseover(() => {

  $('#resultadoDivInterna').html('Entrou');
  console.log('Div Interna (entrou)');

})

$('#divInterna').mouseout(() => {

  $('#resultadoDivInterna').html('Saiu');
  console.log('Div Interna (saiu)');

})
*/

//////////////////////////////
//////     TESTES       //////
//////////////////////////////
//////   ENTER/LEAVE    //////
//////////////////////////////

$('#divExterna').mouseenter(() => {

  $('#resultadoDivExterna').html('Entrou');
  console.log('Div Externa (entrou)');

})

$('#divExterna').mouseleave(() => {

  $('#resultadoDivExterna').html('Saiu');
  console.log('Div Externa (saiu)');

})

$('#divInterna').mouseenter(() => {

  $('#resultadoDivInterna').html('Entrou');
  console.log('Div Interna (entrou)');

})

$('#divInterna').mouseleave(() => {

  $('#resultadoDivInterna').html('Saiu');
  console.log('Div Interna (saiu)');

})

})