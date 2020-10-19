class Arquivo {

    constructor(nome, tamanho, tipo) {
        this._nome = nome;
        this._tamanho = tamanho;
        this._tipo = tipo;
    }

    get nome() {
        return this._nome;
    }

    get tamanho() {
        return this._tamanho;    
    }

    get tipo() {
        return this._tipo;
    }
}
/*
Sua tarefa é implementar o método envia de ArquivoController. 
Ele deverá ler a entrada do usuário e adequá-la ao construtor de Arquivo.
Assim que você conseguir criar uma instância de arquivo, você deve imprimir seus dados no console.
Lembre-se que o usuário digita no campo de entrada os dados do arquivo no formato: nome / tamanho / tipo e deve estar em caixa alta!
*/