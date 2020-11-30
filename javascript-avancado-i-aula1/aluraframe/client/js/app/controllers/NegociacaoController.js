class NegociacaoController {

    constructor() { //QUANDO uma controler eh criada..

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia')    //METODOS


        this._mensagem = new Bind(
            new Mensagem(),                        //modelo
            new MensagemView($('#MensagemView')), //view   -colocar dentro dos parenteses onde quer add a msg (no html ) 
            'texto');                             //condição  (PROPERTY)
    }


    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._limpaFormulario();
    }

    importaNegociacoes() {

        let service = new NegociacaoService();
        service.obterNegociacoesDaSemana((erro, negociacoes) => {
            if (erro) {
                this._mensagem.texto = erro;
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); //Adicionar cada item desse novo array na lista de negociacoes
            this._mensagem.texto = 'Negociações importadas com sucesso.';
        });
    }


    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso.';
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {             // tem underline na frente pq somente a classe ListaNegociacao pode chamar esse método ( não faz sentido outra classe chamá-lo)

        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
