let pessoa = { 
    nome: 'Flávio', 
    sobrenome: 'Almeida', 
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}


//let pessoaProxy = ProxyFactory.create(pessoa, ['getNomeCompleto'], () => console.log('armadilha aqui'));

console.log(pessoa.getNomeCompleto());