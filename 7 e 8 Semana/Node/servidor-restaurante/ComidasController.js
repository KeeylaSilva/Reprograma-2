const comidas = {
    pratos: [{
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    },   
]}

const get = (params) => {
    return comidas
}

const add = (comida) => {
    comidas.pratos.push(comida)
}
module.exports = {get,add}