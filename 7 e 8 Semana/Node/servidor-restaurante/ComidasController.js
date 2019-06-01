const comidas = {
    pratos: [{
        nome: "Batata frita",
        descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    },   
]}

const get = (params) => {
    return pratos
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    comidas.pratos.push(comida)
}

server.remove = (id) => {
    let comidasRestantes = getAll().pratos
    comidasRestantes.filter((comidas) => {
        return comidas.id !== id
    })
    
}

module.exports = {get,add,remove}