    class Secretaria extends Funcionario {

        constructor(nome, funcionario) {
           super(nome);
            this._funcionario = funcionario; // segundo parâmetro, funcionario, só diz respeito à secretária, por isso a propriedade foi adicionada em this._funcionario.
        }
    
        atendeTelefone() {
            console.log(`${this._nome} atendendo telefone` );
        }
        get funcionario() {
            return this._funcionario;
    
    }