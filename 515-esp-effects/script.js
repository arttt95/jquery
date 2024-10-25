$(document).ready(() => {
 
//$('#div1').hide('fast');
//$('#div1').show('medium');
//$('#div1').hide('slow');
//$('#div1').show(2000);

//$('#div1').toggle('fast');
//$('#div1').toggle('medium');
//$('#div1').toggle('slow');
//$('#div1').toggle(2000);

$('#btn1').on('click', () => {

  $('#div1').toggle('medium');

})

$('#btn2').on('click', () => {

  $('#div2').fadeToggle(800);

})

$('#btn3').on('click', () => { //slideUp() | slideDown()

  $('#div3').slideToggle(200);

})

})