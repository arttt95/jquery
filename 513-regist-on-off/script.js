$(document).ready(() => {

$('body').on('focus', 'input', (e) => {
  $(e.target).removeClass('desfocado').addClass('focado');
})

$('body').on('blur', 'input', (e) => {
  $(e.target).removeClass('focado').addClass('desfocado');
})

$('body').append('<br><br><input type="text" class="desfocado">');

//$('body').append('<br><br><input type="text" class="desfocado">');

})