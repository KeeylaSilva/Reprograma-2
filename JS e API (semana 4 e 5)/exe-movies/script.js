const botao = document.querySelector('.btn-search-movie')

botao.addEventListener("click", (evento) => {
    evento.preventDefault()

    const palavra = document.getElementById('movie')
    console.log(palavra.value)
        fetch('http://www.omdbapi.com/?s=' + palavra.value + '&apikey=78591de5')

        .then((response) => {
            return response.json()

        })
        .then((data) => {
            console.log(data)

            data.Search.forEach(data => {
                
                const filme = document.querySelector('.movies')

                const box = document.createElement('div');
                box.setAttribute('class', 'box');
                filme.appendChild(box)

                const poster = document.createElement('img')
                poster.setAttribute('src', data.Poster)
                box.appendChild(poster)

                const box2 = document.createElement('div')
                box2.setAttribute('class', 'box-divider')
                box.appendChild(box2)

                const title = document.createElement('p')
                title.innerHTML = data.Title
                box2.appendChild(title)

                const year = document.createElement('p')
                year.innerHTML = data.Year
                box2.appendChild(year)

                const tipo = document.createElement('p')
                tipo.innerHTML = data.Type
                box2.appendChild(tipo)

        });
        })

        .catch((erro) => {
            console.log(erro)
        })
})