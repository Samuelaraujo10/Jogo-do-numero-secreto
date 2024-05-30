let sorteioDeNumeros = []
let numerosDisponiveis = 20
let numeroSecreto = gerarNumAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 20')
}

exibirMensagemInicial()

function verificarChute() {
  let chute = document.querySelector('input').value

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!')
    // Verifica quantas tentativas foram feitas e escreve a mensagem de acordo com a quantidade.
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTextoNaTela('p', mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor')
    } else {
      exibirTextoNaTela('p', ' O número secreto é maior')
    }
    tentativas++
    limparCampo()
  }
}

function gerarNumAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numerosDisponiveis + 1)
  let quantidadeDeElementosLista = sorteioDeNumeros.length

  if (quantidadeDeElementosLista == numerosDisponiveis) {
    sorteioDeNumeros = []
  }

  if (sorteioDeNumeros.includes(numeroEscolhido)) {
    return gerarNumAleatorio()
  } else {
    sorteioDeNumeros.push(numeroEscolhido)
    console.log(sorteioDeNumeros)
    return numeroEscolhido
  }
}

function limparCampo() {
  chute = document.querySelector('input')
  chute.value = ''
}

function reiniciarJogo() {
  numeroSecreto = gerarNumAleatorio()
  limparCampo()
  tentativas = 1
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled, true')
}
