export class Negociacao{
    constructor(){

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;  
        Object.freeze(this);
    }

    get Volume(){

        return this.quantidade * this.valor;
    }

    get Data(){
        return this._data;
    }

    get Quantidade(){
        return this._quantidade;
    }

    get Valor(){
        return this._valor;
    }
}