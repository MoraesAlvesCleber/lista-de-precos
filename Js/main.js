class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            alert("Salvar");
        }
        
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
    validaCampos(produto){
        let msg = "";

        if (produto.nomeDoProduto == "") {
            msg += " - Informe o nome do produto \n";
        }
        if (produto.nomeDaLoja == "") {
            msg += " - Informe o nome da loja \n";
        }
        if (produto.preco == "") {
            msg += " - Informe o preço do produto \n";
        }
        if (msg != ""){
            alert(msg);
            return false;
        }
        return true;
    }
    Excluir() {
        alert('Excluir produto')
    }
}
var produto = new Produto();