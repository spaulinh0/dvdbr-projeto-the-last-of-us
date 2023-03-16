/*
  OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

  Passo 1 - dar um jeito de pegar o elemento HTML dos botões
  Passo 2 - dar um jeito de indentificar o clique do usuário no botão
  Passo 3 - desmarcar o botão selecionado anterior
  Passo 4 - marcar o botão clicado como se estivesse selecionado
  Passo 5 - esconder a imagem de fundo anterior
  Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//Passo 1 - dar um jeito de pegar o elemento HTML dos botões.

// querySelectorAll: Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma NodeList.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//Passo 2 - dar um jeito de indentificar o clique do usuário no botão.

//forEach(): executa uma função para cada elemento de um array/lista.
botoesCarrossel.forEach((botao, posicao) => {
  //addEventListener: permite que você configure funções a serem chamadas quando um evento específico acontece.
  //click: Representa um evento de clique.
  botao.addEventListener('click', () => {
    //Passo 3 - desmarcar o botão selecionado anterior.

    //querySelector: retorna o primeiro elemento filho que corresponda a um ou mais seletores CSS especificados. 
    const botaoSelecionado = document.querySelector('.selecionado');
    //classList: propriedade retorna os nomes de classe CSS de um elemento.
    //remove(): método remove um elemento (ou nó) do documento.
    botaoSelecionado.classList.remove('selecionado');

    //Passo 4 - marcar o botão clicado como se estivesse selecionado.

    //add() acrescenta um novo elemento com o valor especificado no final de um objeto.
    botao.classList.add('selecionado')

    //Passo 5 - esconder a imagem ativa de fundo anterior
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')

    // Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado.
    imagens[posicao].classList.add('ativa')
    console.log(posicao)
    
  })
})