//Coletar o Elemeno Botao

var botao = document.querySelector('.transacao__button')

botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    //Coletar Elementos do DOM
    var inputTransacao = document.getElementById('transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.getElementById('transacaoInputDate');
    // Valores dos Inputs

    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;

   
    //Criando Linhas

    var linha = document.createElement('tr');

    var colunaTransacao = document.createElement('td')
    colunaTransacao.textContent = valorTransacao
    linha.appendChild(colunaTransacao)
    var colunaValor = document.createElement('td')
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)
    var colunaData = document.createElement('td')
    colunaData.textContent = valorData
    linha.appendChild(colunaData);

    var tabela = document.querySelector('.extrato_body')
    tabela.appendChild(linha);

    
})