//Usuario não vazio
// Tem que ter 1 @
// Senha 6 caracteres
// Se ok - ixibir mensagem "Acesso com sucesso"
// Se falhar - ixibir mensagem de erro

var mensagem = document.querySelector('.login__subtitle')

var botao = document.querySelector('.button')
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#loginInputEmail')
    var senha = document.querySelector('#loginInputPassword')
    if (email.value == "" || email.value.length == 0) {

        mensagem.textContent = 'Digite um E-mail válido'
        email.focus()
        return
    } else if (email.value.indexOf('@') <= 0 || email.value.indexOf('@')
        >= email.value.length - 1) {
        mensagem.textContent = 'O email informado é inválido'
        return
    }else if (senha.value == "" || senha.value.length < 6){
        mensagem.textContent = 'A senha informada é inválida'
        alert ('Digite no minimo 6 caracteres')
        
        return
    }
    mensagem.textContent = 'O email' + email.value + ' foi cadastrado com sucesso!'
})
    