let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;


    //calcular o preço
    let preco = quantidade * valorUnitario;



    //adicionar produto no carrinho, valor subtotal
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
    //erro caso ainda consiga colocar produto com quantidade 0
    /*if (quantidade == 0) {
        alert('ERRO: Faltou escolher a quantidade do produto');
        limpar();
    } else {
        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
    } */

}

// Função para habilitar ou desabilitar o botão
function verificarQuantidade() {
    let quantidade = document.getElementById('quantidade').value;
    let botaoAdicionar = document.querySelector('.botao-adicionar'); // Seleciona o botão pela classe

    if (quantidade > 0) {
        botaoAdicionar.disabled = false; // Habilita o botão
    } else {
        botaoAdicionar.disabled = true; // Desabilita o botão
    }
}

// Adiciona um evento para verificar a quantidade sempre que o valor mudar
document.getElementById('quantidade').addEventListener('input', verificarQuantidade);

// Desabilita o botão inicialmente
document.querySelector('.botao-adicionar').disabled = true; // Desabilita o botão inicialmente

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';

}

