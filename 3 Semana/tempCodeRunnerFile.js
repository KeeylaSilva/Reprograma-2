class Mulher{
    constructor(nome, anoNascimento) {
        this._nome = nome
        this._anoNascimento = anoNascimento
    }

    get nome() {
        return this._nome;
    
    }

    set nome(novo_nome) {
        this._nome = novo_nome;
    }
}
let eu = new Mulher("Jô",1983)