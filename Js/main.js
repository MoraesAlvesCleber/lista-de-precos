class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }

    salvar() {
        let produto = this.lerDados();
        console.log(produto);
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeDaLoja = document.getElementById('loja').value;
        produto.nomeDoProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;

    }
    Excluir() {
        alert('Excluir produto')
    }
}
var produto = new Produto();