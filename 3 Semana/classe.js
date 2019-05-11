class Canetao{
    constructor(_marca, _cor) {
        this.marca =_marca,
            this.cor = _cor,
            this.tampada = true,
            this.escrevendo = false
    }
    function escrever() {
        if (this.tampada == false) {
            console.log(`Estou escrevendo`)
        } else {
            console.log (`Erro: Você deve destampar antes de escrever`)
        }
    }
}

// Operador tenario
// condicao== true? console.log('verdadeiro'):console.log('false')

// condicao == true? console.log('verdadeiro'):console.log('false')

class Canetao{
	constructor(_marca, _cor){
		this.marca = _marca,
		this.cor =_cor,
		this.tampada =true,
		this.escrevendo = false
    }
    escrever(){ //function
        if (this.tampada == false){
            console.log('Estou escrevendo')
            this.escrevendo = true;
        }else{
        console.log('Erro:Você deve destampar antes de escrever')
        }
    }

    destampar(){
        this.tampada?this.tampada = false:console.log('O canetao já está sem tampa!')
    }

    tampar(){
        if (this.tampada){
            console.log('O canetao já está com tampa!')
        }else {
            this.tampada = true
            if(this.escrevendo) {
                this.escrevendo = false;
            }
        }
    }
getMarca(){
return this.marca
    }
}


let canetao1 = new Canetao('Pilot','Azul')
console.log(canetao1)

canetao1.escrever()
console.log(canetao1)
canetao1.destampar()
console.log(canetao1)
canetao1.escrever()
console.log(canetao1)
canetao1.tampar()
console.log(canetao1)