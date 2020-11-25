let pessoa = { 
    nome: 'Flávio', 
    sobrenome: 'Almeida', 
    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}


console.log(pessoa.getNomeCompleto()):