




function outlookLink(){
    window.location.href = "#";
}


function checkSlide(){

    let imagem = document.getElementById("slide-img")
    let titulo = document.getElementById("slide-h2")
    let paragrafo = document.getElementById("slide-p")
    let botao = document.getElementById("slide-a")


    if(document.getElementById("checkboxA").checked){
        imagem.src = "sourcers/slide-win11-grande.webp"
        
        titulo.textContent = "Projetado para a vida hoje e amanhã"
        titulo.style.color = "white"
        
        paragrafo.textContent = "A próxima geração de jogos. Seus objetivos. Amigos e família. O Windows 11 foi feito para aproximá-lo de tudo que você mais gosta."
        paragrafo.style.color = "white"
        
        botao.textContent = "Veja se o seu PC está pronto"
        botao.style.backgroundColor = "white"
        botao.style.color = "black"
        
    }
    else if(document.getElementById("checkboxB").checked){
        imagem.src = "sourcers/slide-m365-grande.webp"
        
        titulo.textContent = "Microsoft 365"
        titulo.style.color = "black"
        
        paragrafo.textContent = "Aplicativos premium do Office, armazenamento extra na nuvem, segurança avançada e muito mais. Tudo em uma conveniente assinatura"
        paragrafo.style.color = "black"
        
        
        botao.textContent = "Para até 6 pessoas"
        botao.style.backgroundColor = "black"
        botao.style.color = "white"
    }
    

}



