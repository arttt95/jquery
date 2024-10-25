$(document).ready(() => {

$('#nome, #email').focus((e) => {

  console.log('Esse elemento html recebeu foco');
  $(e.target).addClass('inputFocado');
})

/*
$('#email').focus((e) => {

  console.log('Esse elemento html recebeu foco (email)');
  $(e.target).addClass('inputFocado');
})
*/

$('#nome, #email').blur((e) => {

  console.log('Esse elemento html perdeu foco');
  $(e.target).removeClass('inputFocado');

})

/*
$('#email').blur((e) => {

  console.log('Esse elemento html perdeu foco (email)');
  $(e.target).removeClass('inputFocado');

})
*/

$('#opcao').change((e) => {

  console.log($(e.target).val());

})

$('#form').submit((e) => {

  e.preventDefault();
  console.log('Formulário enviado');

})

$('a').click((e) => {

  e.preventDefault()

})


})