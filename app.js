let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(
        texto, 
        'Brazilian Portuguese Female', 
        {rate:1.2}
    )
}

exibirTextoNaTela('#titulo', `Jogo do número secreto`)
exibirTextoNaTela('.texto__paragrafo', `Escolha um número entre 1 e 10`)

let chute = document.querySelector('.container__input')
function verificarChute(){
    if(chute.value == numeroSecreto){
        exibirTextoNaTela('#titulo', 'Você acertou!')
        exibirTextoNaTela('.texto__paragrafo', `Você descobriu o número secreto!`)
        document.querySelector('#reiniciar').removeAttribute('disabled')
    }
    else{
        if(chute.value > numeroSecreto){
            exibirTextoNaTela('.texto__paragrafo', 'O número secreto é menor')
        }
        if(chute.value < numeroSecreto){
            exibirTextoNaTela('.texto__paragrafo', 'O número secreto é maior')
        }
        limparCampo()
    }
};

function limparCampo(){
    chute.value = ''
}

function reiniciarJogo(){
    location.reload()
}