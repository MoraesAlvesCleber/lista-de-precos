class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];

    }

    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
             
        }
        
         this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(let i= 0 ; i < this.arrayProdutos.length; i++) {    
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_loja = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_loja.innerText = this.arrayProdutos[i].nomeDaLoja;
            td_produto.innerText = this.arrayProdutos[i].nomeDoProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;

            
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
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

   
}
var produto = new Produto();