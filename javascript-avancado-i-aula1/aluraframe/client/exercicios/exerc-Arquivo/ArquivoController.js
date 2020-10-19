class ArquivoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDados = $('.dados-arquivo');
    }

    envia() {
                                            //cria um Arquivo com as suas propriedades;
        let dados = this._inputDados.value  // pegou do html
                            .split('/')     // transformou em um array e cada item será separado onde tem a barra '/'
                            .map(item => item.toUpperCase()); //.map eh um for moderno. caminha no array colocando cada item em uppercase

        let arquivo = new Arquivo(...dados); //mas cada um em separado como parâmetro do construtor.
                                             // criar uma instância de arquivo

        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _criaArquivo() {
        return new Arquivo(
            this._inputDados.value
        );
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}