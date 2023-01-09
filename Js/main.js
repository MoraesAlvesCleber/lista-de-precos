class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
       

    }
    

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);

        }

        this.listaTabela();
        this.apagar();
        
    }
    

    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_loja = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_apagar = tr.insertCell();


            td_id.innerText = this.arrayProdutos[i].id;
            td_loja.innerText = this.arrayProdutos[i].nomeDaLoja;
            td_produto.innerText = this.arrayProdutos[i].nomeDoProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add("center");

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/delete.svg';
            imgEdit.setAttribute('onclick', 'produto.deletar(' + this.arrayProdutos[i].id + ')');

            td_apagar.appendChild(imgEdit);
            

            
        }
        
    }
   

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
        const itens = []

        const itemAtual = {
            'nomeDaLoja' : produto.nomeDaLoja,
            'nomeDoProduto' : produto.nomeDoProduto,
            'preco' : produto.preco
        }
        itens.push(itemAtual);

        localStorage.setItem('item',JSON.stringify(itens))
         
      
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeDaLoja = document.getElementById('loja').value;
        produto.nomeDoProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }
    validaCampos(produto) {
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
        if (msg != "") {
            alert(msg);
            return false;
        }
        return true;
    }
    apagar() {
        document.getElementById('loja').value = '';
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';

    }
    deletar(id) {
        let tbody = document.getElementById("tbody");
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }

    }
}
var produto = new Produto();