class Negociacao {

    constructor() {

        this._data = new Date (data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = quantidade * valor;
        Object.freezer(this)
    }

    get _volume (){
        return this._quantidade * this._valor;
    }

    get data () {
        return new Date(this._data.getTime());

    }

    get quantidade(){
        return this._quantidade;
    }

    get valor () {
        return this._valor;
    }
}
