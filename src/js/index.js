/* 
    Obj:1 quando o usuario clicar no batão veja o trailer , devemos  abri o modal com o video do trailer
      -  passo 1 dar um jeito de pegar o elemento que representa o botao na tela usando o js
      - passo 2 dar um jeito de identificar quando o usuario clicar no botao
      - passo 3 dar um jeito de pegar o elemento da modal no js
      - passo 4 abrir a modal na tela


    Obj:2 quando o usuario ver o trailer, clicar no x fechar 
    - dar um jeito de pegar o elemento de fechar o modal
    - dar um jeito de identificar quando o usuario clicar no x
    - fechar a modal  
*/

// abrir o video clicando em veja o trailer

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");

}


botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src" , linkDoVideo);
});

// passo 2 fechar o video 

botaoFecharModal.addEventListener("click" , () => {
    alternarModal();
    video.setAttribute("src" , "");

});


