// Definindo dimensão do jogo
let altura;
let largura;
let vidas = 1;
let tempo = 15;

let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'impossivel') {
    criaMosquitoTempo = 750;
}

document.querySelector('#cronometro').innerHTML = tempo; 

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

const cronometro = setInterval(function() {
    
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.querySelector('#cronometro').innerHTML = tempo;
    } 
}, 1000)

function posicaoRandomica() {
    
    // Remover o mosquito anterior (caso exista)
    if (document.querySelector('#mosquito')) {
        document.querySelector('#mosquito').remove();

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.querySelector('#v' + vidas).src ='assets/img/coracao_vazio.png';
            
            vidas++;
        }
        
    }

    
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
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);

    ladoAleatorio();
}



let criaMosquito = setInterval(function() {
    posicaoRandomica()
}, criaMosquitoTempo);



// Função Responsável por diferenciar os tamanhos dos mosquitos
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



// Função Responsável por variar o lado para qual o mosquito olha 
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

function iniciarJogo() {
    let nivel = document.getElementById('nivel').value;

    if (nivel === '') {
        alert('Selecione um nível para iniciar o jogo!');
        return false;
    }

    window.location.href = "index.html?" + nivel;
}