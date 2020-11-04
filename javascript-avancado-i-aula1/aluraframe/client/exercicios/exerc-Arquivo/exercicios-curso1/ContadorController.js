class ContadorController {

    constructor() {
        this._contador = 0;
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementar() {
        this._contador++;
        alert(this._contador);
    }
}