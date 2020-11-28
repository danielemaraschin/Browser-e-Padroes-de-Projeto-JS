class Negociacao{
    constructor( data, quantidade, valor){
            //2020-11-27T16:36:16.968Z


        this._data = new Date (data.getTime());//3423452353453465465565
        this._quantidade = quantidade;
        this._valor = valor;  
        Object.freeze(this);
    }

    get volume(){

        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}