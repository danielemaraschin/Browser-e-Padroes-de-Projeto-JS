class ListaNegociacoes {

    constructor(){

        this._negociacoes = [];     //a lista inicia em branco
        
    }

    adiciona(negociacao){                                        
        this._negociacoes.push(negociacao);
  
    }

    get negociacoes(){                   
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }
}