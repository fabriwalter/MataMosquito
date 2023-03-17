// Definindo dimensão do jogo
let altura;
let largura;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {
    // Criando posições aleatórias
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)


    // Criar o elemento HTML
    const mosquito = document.createElement('img');
    mosquito.src = 'assets/img/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = `${posicaoX}px`;
    mosquito.style.top = `${posicaoY}px`;
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);

    console.log(ladoAleatorio());
}

posicaoRandomica();

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);
    
    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    } 
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}