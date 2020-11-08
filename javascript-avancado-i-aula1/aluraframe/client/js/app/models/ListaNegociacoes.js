class ListaNegociacoes {

    constructor(){

        this._negociacoes = [];     //a lista inicia em branco
        
    }

    adiciona(negociacao){                                             //this._negociacoes é a lista e dai concatena com a negociacao que esta add
        this._negociacoes = [].concat(this._negociacoes, negociacao) // "força iniciar um valor para conseguir usar o set function"
        //this._negociacoes.push(negociacao);// inicia sem valor inicial   ----era o método antigo, trocamos para conseguir lidar com a view
  
    }

    get negociacoes(){                   
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }
}