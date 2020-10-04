export class Negociacao{
    constructor(){

        this._data = new Date();
        this._quantidade = 1;
        this._valor = 0.0;  
    }

    getVolume(){

        return this.quantidade * this.valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValor(){
        return this._valor;
    }
}