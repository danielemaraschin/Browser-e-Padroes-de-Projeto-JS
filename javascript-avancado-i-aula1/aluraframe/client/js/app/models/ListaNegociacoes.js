class ListaNegociacoes {

    constructor(){

        this._negociacoes = []      //a lista inicia em branco

    }

    adiciona(negociacao){               // pelo metodo adiciona ,add novas negociações
        this._negociacoes.push(negociacao)
    }

    get negociacoes(){                   
        return [].concat(this._negociacoes);
    }

}