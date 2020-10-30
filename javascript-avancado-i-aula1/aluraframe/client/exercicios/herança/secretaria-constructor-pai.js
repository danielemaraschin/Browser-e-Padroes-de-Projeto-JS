class Secretaria extends Funcionario {
    // não precisei adicionar constructor e nem chamar super pq o constructor é identico ao da classe pai
atendeTelefone() {
console.log(`${this._nome} atendendo telefone` );
}
get funcionario() {
return this._funcionario;

}