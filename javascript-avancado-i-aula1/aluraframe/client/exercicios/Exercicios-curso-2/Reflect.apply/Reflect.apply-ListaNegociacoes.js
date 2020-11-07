class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;   // USANDO MÉTODO REFLECT.APPLY PRECISA DA VAR _CONTEXTO;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        Reflect.apply(this._armadilha, this._contexto, [this]);  // USANDO MÉTODO REFLECT.APPLY = REFLECT APPLY É ALGO NOVO A PARTIR DO ES6
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        Reflect.apply(this._armadilha, this._contexto, [this]); // USANDO MÉTODO REFLECT.APPLY
    }
}