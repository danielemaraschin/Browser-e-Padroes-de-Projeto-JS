class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;  // USANDO MÉTODO .APPLY PRECISA DA VAR _CONTEXTO;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha.apply(this._contexto, [this]); // USANDO MÉTODO .APPLY diretamente no Armadilha (ERA ASSIM ATÉ O S5)
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha.apply(this._contexto, [this]);// USANDO MÉTODO .APPLY diretamente no Armadilha (ERA ASSIM ATÉ O S5)
    }
}