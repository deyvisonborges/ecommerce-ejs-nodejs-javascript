'use strict'

class Carrinho {
    constructor () {
        this._carrinho = {};
    }
    
    adicionarAoCarrinho() {
        let codigo = 123
        let dados = 'Ola'


        this._carrinho = { 
            codigo: dados 
        };
        console.log('adicionado com sucesso')
    }

    removerDoCarrinho(codigo) {
        delete this._carrinho[codigo];
        return;
    }
}

let cart = new Carrinho;
cart.adicionarAoCarrinho();
cart.Carrinho;