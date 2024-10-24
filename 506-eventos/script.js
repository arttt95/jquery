$(document).ready(function () {

// Inserindo um bg color em um Elemento HTML específico
//$('#topo').css('background-color', '#155661');

//$('#topo').css('background-color', '#155661').css('margin', '0px').css('padding', '10px 20px 20px 20px');

//$('body').css('margin', '0px');

/////////////////////////////////////////////////////////////

// Passando tudo de uma só vez como um obj literal ({})

//$('#topo').css({ 'background': '#155661', 'margin': '0px', 'padding': '10px 20px 10px 20px'});

//$('h1').css({'color': 'white', 'margin': '0px'});

/////////////////////////////////////////////////////////////

// Adicionando classes para estilos pré-customizados (addClass)

//$('input').addClass('campo'); -> Essa classe já estaria pré-setada no arquivo CSS

//$('textarea').addClass('campo erro');

/////////////////////////////////////////////////////////////

// Testando se um Elemento HTML tem uma determinada Classe

/*
if($('textarea').hasClass('campo erro')) {
    alert('Temos um campo com erro');
  } 
*/

/////////////////////////////////////////////////////////////

//Removendo classes de um Elemento HTML

//$('textarea').removeClass('campo erro');

})