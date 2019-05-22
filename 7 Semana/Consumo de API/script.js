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

            const link = document.createElement('div')
            link.setAttribute('class', 'maravilhosas__perfil')
            woman.appendChild(link)

            // const img = document.createElement('a')
            // img.setAttribute('src', data.image)
            // link.appendChild(img)
           
            const title = document.createElement('h3')
            title.innerHTML = data.title
            link.appendChild(title)
            
            const descricao = document.createElement('p')
            descricao.innerHTML = data.description
            link.appendChild(descricao)
    

            // CRIAR IF PARA IMAGENS
        })

    })

    .catch((erro) => {
        console.log(erro)
    })