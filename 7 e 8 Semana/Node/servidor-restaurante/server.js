const http = require('http')
//Subindo servidor
const servidor = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end('Hello World')
        //declarando ROTA ('/comidas')
    } else if (request.url === '/comidas') {
        if (request.method === 'GET') {
            //Adicionando leitor para HTML e UTF8
            response.writeHead(200, {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*", 
            })
            response.write(JSON.stringify(
                {
                    pratos: [
                        {
                            "nome": "Paçoquita",
                            "descricao": "Tenho alergia",
                            "image": "https://images-americanas.b2w.io/produtos/01/00/sku/19546/1/19546180_1GG.jpg"
 
                        },
                        {
                            nome: "Batata frita",
                            descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
                            imagem: "img/Batata-frita.jpg"
                          },
                          {
                            nome: "Macarronada",
                            descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
                            imagem: "img/macarronada.jpg"
                          },
                          {
                            nome: "Falafel",
                            descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
                            imagem: "img/falafel.jpg"
                          },
                        {
                            nome: "Creme de abóbora",
                            descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
                            imagem: "img/creme-de-abobora.jpg"
                        }
                    ]
                }))


            response.end()
            //Atualização de informações
        } else if (request.method === 'POST') {
            response.writeHead(201, { "Content-type": "text/html;charset=utf-8" })
            response.end("<h1>VEM CURTIRRRRRRRR!!!!!</h1>")
        }


    }
})

servidor.listen(3000)