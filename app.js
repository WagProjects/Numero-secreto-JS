let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
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