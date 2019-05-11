let listaProdutos = [];
let camiseta = {
        tamanho: 'unico',
        cor: 'preta',
        modelo: 'babylook',
        descricao:'Camiseta reprograma estilo diva fuction',
        preco: 35,
        descrevaMe: function(){alert(`${this.descricao} - Preço R$ ${this.preco}`)}
}
console.log(camiseta.descricao)

let caneca = {
    cor: 'azul',
    tipo: 'comum',
    comAlca: 'sim',
    descricao: 'Caneca Mágica Reprograma',
    ml: 400,
    preco: 20,
    descrevaMe: function () { alert(`${this.descricao} - Preço R$ ${this.preco}`) },
  
}
let adesivo = {
    cor: 'branco',
    descricao: 'Adesivo reprograma',
    preco: 15
}
listaProdutos.push(camiseta,caneca,adesivo)