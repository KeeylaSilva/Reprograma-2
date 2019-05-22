const classe = document.getElementsByClassName('maravilhosas__perfil')

fetch('https://theblackwomanhistory.firebaseio.com/.json')

    .then((response) => {
        return response.json()

    })
    .then((data) => {
        console.log(data)

        data.content.forEach(data => {

            const woman = document.querySelector('.maravilhosas__box')

            // const box = document.createElement('div');
            // box.setAttribute('class', 'box')
            // woman.appendChild(box)

            const link = document.createElement('maravilhosas__perfil')
            link.setAttribute('class', 'a')
            woman.appendChild(link)



            const title = document.createElement('h3')
            title.innerHTML = data.title
            link.appendChild(title)

            const descricao = document.createElement('p')
            descricao.innerHTML = data.description
            link.appendChild(descricao)

            const a = document.createElement('a')
            a.setAttribute('src', 'Foto da personalidade')
            link.appendChild(a)

            const img = document.createElement('img')
            if (data.metadata && data.metadata.image.url) {
                img.setAttribute('src', data.metadata.image.url);
            } else {
                // img.setAttribute('src', '.Consumo de API\img\img-mulher.png')
            }
            link.appendChild(img)

            // CRIAR IF PARA IMAGENS
        })

    })

    .catch((erro) => {
        console.log(erro)
    })