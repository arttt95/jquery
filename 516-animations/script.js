$(document).ready(() => {
 
$('button').on('click', () => {

  let visualFinal = {
    'width': '160px',
    'height': '160px',
    'background-color': 'pink',
    'margin-left': '200px',
    'margin-top': '200px',
    'border-radius': '25px'
  };

  $('#div1').animate(
    visualFinal, 
    {
      duration: 1500,
      start: () => {
        console.log('Animação iniciada');
      },
      complete: () => {
        console.log('Animação concluída')
        $('#div2').animate(
          visualFinal
        )
      }
    }
  )

})

})