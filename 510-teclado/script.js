$(document).ready(() => {

/*
$('#teclado').keydown(() => {

  $('#resultadoTecla').html('Tecla Pressionada');
  console.log('Tecla Pressionada');

})
*/

/*
let isFirstKey = true;

$('#teclado').keyup((e) => {

  //$('#resultadoTecla').html('Tecla Liberada');
  
  /*
  if(isFirstKey) {

    $('#resultadoTecla').append(e.keyCode);

    isFirstKey = false;

  } else {

    $('#resultadoTecla').append(' | ' + e.keyCode);

  }
  */
/*
  if(e.keyCode == 13) {

    let txt = $(e.target).val();

    $('#resultadoTecla').html(txt);

    $(e.target).val('');

  }
  
  //console.log(e.keyCode);

})
*/

$('#teclado').keyup((e) => {

  if(e.keyCode < 49 || e.keyCode > 58) {
    
    let txt = $(e.target).val();
    txt = txt.slice(0, -1);

    $(e.target).val(txt)

  }

})


})