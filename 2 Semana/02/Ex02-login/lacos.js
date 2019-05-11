// Adivinhe o número

// Gerar numero aleatorio entre 0 e 10
var numeroOculto = Math.round(Math.random()*10)
var acertou = false;
var chute
console.log(numeroOculto);

while (acertou == false){
    chute = parseInt(prompt('Tente adivinhar o número'))
    if (chute == numeroOculto){
        acertou = true
        alert('Parabéns, você acertou!')
    } 
}

// Contar de 0 a 100

var numero = 0
while (numero = 10) {
    console.log(numero)
    numero++
    numero = numero + 1

}