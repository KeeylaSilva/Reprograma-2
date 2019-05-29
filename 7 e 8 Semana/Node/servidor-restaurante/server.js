const http = require('http')
//Subindo servidor
const servidor = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end('Hello World')
        //declarando ROTA ('/comidas')
    } else if (request.url === '/comidas') {
        if (request.method === 'GET') {
            //Adicionando leitor para HTML e UTF8
            response.writeHead(200, {"Content-type": "text/html;charset=utf-8"})
            response.end("<h1>Servidosão das PlayBA</h1>")
        }else if (response.method === 'POST'){
            response.writeHead(201, { "Content-type": "text/html;charset=utf-8" })  
            response.end("<h1>VEM CURTIRRRRRRRR!!!!!</h1>")
        }

       
    }
})

servidor.listen(3000)