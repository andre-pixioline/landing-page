/* 
    quando clicar na seta avançar temos que esconder todas as imagens e mostrar a proxima imagem 
        
        imagem atual começa no 0, por que e a primeira imgem. Assim que clicar no avançar é preciso adicionar mais 1 ao contador de imagens pra poder alterar a imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a proxima imagem
        pegar todas as imagens, descobrir qual é a proxima, e colocar a classe nela            



*/
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    }); 
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');    
}


setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;
    
    esconderImagens();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})