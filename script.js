const persons = document.querySelector("#sec1")


async function buscar(){
        const requisicao = await fetch("https://rickandmortyapi.com/api/character")
        const resposta = await requisicao.json()
        console.log(resposta.results);
        if(resposta.erro){
            console.log("Busca inválida")
        }else{
            resposta.results.forEach((personagem) =>{

            const card = document.createElement("div") 
            const name = document.createElement("p")
            const status = document.createElement("p")
            const species = document.createElement("p")
            const local = document.createElement("p")
            const imagem = document.createElement("img")
            const div_maior = document.createElement("div")

            persons.appendChild(div_maior)
            div_maior.classList.add("div_maior")


                imagem.src = personagem.image
                imagem.alt = "|Personagem|"
                imagem.width = "150"

                imagem.textContent = personagem.image
                imagem.classList.add("style_img")

                name.textContent = `Nome: ${personagem.name}`
                
                species.textContent = `Espécie: ${personagem.species}`
                            
                status.textContent = `Status: ${personagem.status}`
                
                local.textContent = `Localização: ${personagem.location.name}`

                card.append(name,status,species,local)

                div_maior.appendChild(imagem)
                div_maior.appendChild(card)

                card.classList.add("card_style")
            })

        }
   
}
buscar()
