// pegando elemento do ID CEP HTML
let cep = document.getElementById("cep")

//
cep.addEventListener("focusout", () => {
    console.log("FOCUS OUT")
    // Pegando as informações do JSON
    fetch("http://viacep.com.br/ws/" + cep.value + "/json")
        // Respondendo e retornando as informações do JSON
        .then((response) =>{
            return response.json();
        })
        // Imprimindo as Informações do JSON para os INPUTS
        .then((data) => {
            console.log(data)

            const estado = document.getElementById("estado");
            estado.value = data.uf;

            const cidade = document.getElementById("cidade");
            cidade.value = data.localidade;

            const bairro = document.getElementById("bairro")
            bairro.value = data.bairro

            const endereco = document.getElementById("endereco")
            endereco.value = data.logradouro
            
        })
        .catch((erro) => {
            console.log(erro)
        })
})

