class Conta {

    constructor(titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;
    }

    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    getSaldo() {
        return this._saldo;
    }

    getTitular() {
        return this._titular;
    }

    getConta() {
        return this._conta;
    }
}

var conta = new Conta('Mingau', 171);
conta.deposita(100);
console.log(conta.getTitular());
console.log(conta.getConta());
console.log(conta.getSaldo());