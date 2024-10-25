$(document).ready(() => {

$('#btn2').on('click', () => {

  alert('BTN 2 clicado');

})

$('#btn1').on('click', () => {

  $('#btn2').trigger('click');

})

/*
$('#div1').hover(
  
  e => {

    $('#div1').addClass('emDestaque');

  },

  e => {

    $('#div1').removeClass('emDestaque');

  }

);
*/

$('#div1').hover(e => {

  $(e.target).toggleClass('emDestaque');

})


/*
$('#div1').on('mouseenter', () => {

  $('#div1').addClass('emDestaque');

})

$('#div1').on('mouseleave', () => {

  $('#div1').removeClass('emDestaque');

})
*/

// ToggleClass

//$('#div1').toggleClass('emDestaque'); -> Liga e Desliga a classe

})