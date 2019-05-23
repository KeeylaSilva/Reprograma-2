// const classe = document.getElementsByClassName('maravilhosas__perfil')

fetch('https://theblackwomanhistory.firebaseio.com/.json')

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