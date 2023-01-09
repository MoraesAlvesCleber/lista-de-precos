class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
            }
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
            let td_acoes = tr.insertCell();


            td_id.innerText = this.arrayProdutos[i].id;
            td_loja.innerText = this.arrayProdutos[i].nomeDaLoja;
            td_produto.innerText = this.arrayProdutos[i].nomeDoProduto;
            td_preco.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add("center");

            let imgEdit = document.createElement("img");
            imgEdit.src = 'img/edit.svg';
            imgEdit.setAttribute('onclick', 'produto.editar(' + JSON.stringify(this.arrayProdutos[i]) + ')');

            let imgDel = document.createElement('img');
            imgDel.src = 'img/delete.svg';
            imgDel.setAttribute('onclick', 'produto.deletar(' + this.arrayProdutos[i].id + ')');

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDel);
            imgEdit.style.height = '24px';
        }
    }

    adicionar(produto) {
        produto.preco = parseInt(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;
    }
    atualizar(id, produto){
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id === id){
                this.arrayProdutos[i].nomeDaLoja = produto.nomeDaLoja;
                this.arrayProdutos[i].nomeDoProduto = produto.nomeDoProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
    }
}
    editar(dados) {
        this.editId = dados.id;
        document.getElementById('loja').value = dados.nomeDaLoja;
        document.getElementById('produto').value = dados.nomeDoProduto;
        document.getElementById('preco').value = dados.preco;

        document.getElementById('salvar_atualizar').innerText = 'Atualizar';
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

        document.getElementById('salvar_atualizar').innerText = 'Salvar';
        this.editId = null;

    }
    deletar(id) {
        if (confirm('Deseja realmente deletar o produto ' + id + ' ?')) {
            let tbody = document.getElementById("tbody");
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }

            }
        }

    }
}

var produto = new Produto();