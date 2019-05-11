
const botao = document.querySelector('.btn-search-sticker')

botao.addEventListener("click", (evento) => {
    evento.preventDefault()

    const palavra = document.getElementById('sticker')
    fetch('https://api.giphy.com/v1/stickers/search?q=' + palavra.value + '&api_key=3M8FcKdrPYOckOGC5BIzyd4IcR1jsnWb')

        .then((response) => {
            return response.json()

        })

        .then((data) => {
            console.log(data)
            data.data.forEach(data => {
                console.log(data)
                const adesivo = document.querySelector('.stickers')

                const box = document.createElement('div');
                box.setAttribute('class', 'stickers');
                adesivo.appendChild(box)

                let foto = document.createElement('img')
                foto.setAttribute('src', data.images.original.url)
                box.appendChild(foto)

            });
        })
        .catch((erro) => {
            console.log(erro)
        })
})
