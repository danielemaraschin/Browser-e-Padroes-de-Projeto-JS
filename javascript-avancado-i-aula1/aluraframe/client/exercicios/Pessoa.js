class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;
    }

     ObtemNomeCompleto(){

        return this.nome + " " + this.sobrenome;
    }
}

var pessoa = new Pessoa('Flávio', 'Almeida');
console.log('Nome completo: ' + pessoa.obtemNomeCompleto());
