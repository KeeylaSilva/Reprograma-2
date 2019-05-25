// const classe = document.getElementsByClassName('maravilhosas__perfil')
fetch('http://localhost:5001/maravilhosas')

    .then((response) => {
        return response.json()

    })
    .then((data) => {


        data.content.forEach(data => {

            const woman = document.querySelector('.maravilhosas__box')
            // const box = document.createElement('div');
            // box.setAttribute('class', 'box')
            // woman.appendChild(box)

            const card = document.createElement('div')
            card.setAttribute('class', 'maravilhosas__perfil')
            woman.appendChild(card)

            const link = document.createElement('maravilhosas__perfil')
            link.setAttribute('href', '#')
            card.appendChild(link)

            // const descricao = document.createElement('p')
            // descricao.innerHTML = data.description
            // link.appendChild(descricao)

            const botao = document.createElement('button')
            botao.textContent = ('✖'),
                card.appendChild(botao)
             
        botao.addEventListener("click", () => {
            const thisCard = botao.parentElement;
            const cardPai = thisCard.parentElement;

            fetch('http://localhost:5001/maravilhosas' + data.id, {
                method: "DELETE",
                headers: {
                    'Accept': 'aplication/json', 'Content-Type': 'aplication/json'
                },
            })
                .then(() => {
                    cardPai.removeChild(thisCard)
                })
            
                .catch((erro) => {
                console.log(erro)
            })
        })


            const img = document.createElement('img')
            img.setAttribute('class', 'img-responsive')
            if (data.metadata && data.metadata.image) {
                img.setAttribute('src', data.metadata.image.url);
            } else {
                img.setAttribute('src', './img/img-mulher.png')
            }
            link.appendChild(img)

            const title = document.createElement('p')
            title.textContent = data.title;


            link.appendChild(title)
            console.log(data)

            // CRIAR IF PARA IMAGENS
        })

    })

    .catch((erro) => {
        console.log(erro)
    })

const button = document.getElementById("send_submit");
button.addEventListener('click', evento => {
    console.log('teste')
    evento.preventDefault();

    const entrada = document.getElementById("nome").value;
    const url = document.getElementById("img").value;

    fetch('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            'title': entrada,
            'metadata': {
                'image': {
                    'url':
                        url
                }
            }
        })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('teste')
        })
        .catch((erro) => {
            console.log(erro)
        })
    window.location.reload(true)

  
    // const button = document.getElementById("send_submit");
    // button.addEventListener('click', evento => {
    //     console.log('teste')
    //     evento.preventDefault();

    //     const entrada = document.getElementById("nome").value;
    //     const url = document.getElementById("img").value;

        // fetch('http://localhost:5001/maravilhosas', {
        //     method: 'DELETE',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({

        //         'title': entrada,
        //         'metadata': {
        //             'image': {
        //                 'url':
        //                     url
        //             }
        //         }
        //     })
        // })
            // .then(response => {
            //     return response.json();
            // })
            // .then(data => {
            //     console.log('teste')
            // })
            // .catch((erro) => {
            //     console.log(erro)
            // })
        window.location.reload(true)
           

    })