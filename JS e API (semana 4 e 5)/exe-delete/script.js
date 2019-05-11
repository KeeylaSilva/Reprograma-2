const app = document.getElementById('root')
const authors = document.querySelector('.authors')
authors.setAttribute('class', 'authors')
app.appendChild(authors)

// Pegando as informações do JSON
fetch("https://reqres.in/api/users")
    // Respondendo e retornando as informações do JSON
    .then((response) => {
        return response.json();
    })
    // Imprimindo as Informações do JSON para os INPUTS
    .then((data) => {
        console.log(data)

        data.data.forEach(data => {
            const card = document.createElement("div")
            card.setAttribute("class", "card")
            authors.appendChild(card);
             
            let avatar = document.createElement("img");
            avatar.innerHTML = data.avatar
            avatar.setAttribute("src", data.avatar);
            avatar.setAttribute = ('data-id', document.id)
            card.appendChild(avatar)

            let nome = document.createElement("h1")
            nome.textContent = data.first_name + " " + data.last_name;
            card.appendChild(nome)

            let email = document.createElement("p")
            email.textContent = data.email
            card.appendChild(email)

            const botao = document.createElement('button')
            botao.setAttribute = ('data-id', document.id)
            botao.textContent = ('✖'),
                card.appendChild(botao)
                
            botao.addEventListener("click", () => {
                const thisCard = botao.parentElement;
                const cardPai = thisCard.parentElement;

                fetch('https://reqres.in/api/users' + document.id, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'aplication/json', 'Content-Type': 'aplication/json'
                    },
                    // body: JSON.stringify({
                    //     'id': botao.getAttribute("data-id")
                    
                    // })
                })
            

                    .then(() => {
               cardPai.removeChild(thisCard)
                    })
                
                    .catch((erro) => {
                        console.log(erro)

           
                    })
            })
        })
        
})