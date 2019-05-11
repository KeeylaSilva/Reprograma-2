var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
  evento.preventDefault();
  var email = document.querySelector('#newsInputEmail')

  mensagem.textContent = 'Digite um E-mail'
  function confere(){
    if (document.theForm.email.value.indexOf('@', 0) == -1 || document.theForm.email.value.indexOf('.', 0) == -1){ alert("E-mail invalido!");
      return false;
      }
    }  
    function is_email(email){
      er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/; 
      if( !er.exec(email) )
      {
        jQuery('#retorno_capta').html('Email inválido!');
        return false;
      }
    }
    mensagem.textContent = 'O e-mail' + email.value +'foi cadastrado'
}
    })


