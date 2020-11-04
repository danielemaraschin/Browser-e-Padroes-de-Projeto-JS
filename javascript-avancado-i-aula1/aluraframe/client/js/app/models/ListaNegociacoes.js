class ListaNegociacoes {

    constructor(armadilha){

        this._negociacoes = []      //a lista inicia em branco
        this._armadilha = armadilha;
    }

    adiciona(negociacao){               // pelo metodo adiciona ,add novas negociações
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    get negociacoes(){                   
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
       this._armadilha(this);
    }
}