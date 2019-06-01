const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')
const controller = require('body-parser')
controller.get()





const server = express()
server.use(cors())
server.get("/comidas", (request, response) => {
    response.header('Access-Control-Allow-Origin','*')
    response.send(controller.get())
    
})
      
server.post('/comidas', bodyParser.json(), (request, response) => {
    controller.add(request.body)
    response.send(201)
})

server.delete('/comidas/:id', (request, response) => {
    controller.remove(request.params.id)
    response.sendStatus(204)
})

server.listen(3000)
    console.log("Servidor Funcionando")