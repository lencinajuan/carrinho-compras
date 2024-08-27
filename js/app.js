let totalGeral;
limpar();

function adicionar(){
    //Pegar os valores dos campos do formulário: nome do produto, quantidade e valor
    //Calcular o preço, o nosso subtotal (quantidade x valor)

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Atualizar valor total da compra
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //Adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos"><section class="carrinho__produtos__produto">
        <span class="texto-azul"> ${quantidade} </span>${nomeProduto}<span class="texto-azul">R$${preco}</span></section></section>`

    //Atualizar valor total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    //Função de limpar os dados do carrinho
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';

}