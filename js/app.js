function adicionar(){
    //Pegar os valores dos campos do formulário: nome do produto, quantidade e valor
    //Calcular o preço, o nosso subtotal (quantidade x valor)
    //Adicionar ao carrinho
    //Atualizar valor total da compra

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');

    let preco = quantidade.value * valorUnitario;
    
    /* console.log(nomeProduto);
    console.log(valorUnitario);
    console.log(quantidade.value);
    console.log(preco); */
}

function limpar(){
    //Limpar todos os campos após adicionar os itens no carrinho
}