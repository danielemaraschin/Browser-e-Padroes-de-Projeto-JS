class Funcionario {

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    } 
}

}
let secretaria = new Secretaria('Suzete', new Funcionario('Barney'));