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
        mensagem.textContent = 'O email informado é inválida'
        return
    }
    mensagem.textContent = 'A senha informada é inválida'
    return
}
    mensagem.textContent = 'O email' + email.value + ' foi cadastrado com sucesso!'

})
