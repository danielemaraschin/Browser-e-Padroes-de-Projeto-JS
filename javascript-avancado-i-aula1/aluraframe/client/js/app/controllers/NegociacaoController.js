class NegociacaoController {

    constructor() {

        let  $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#MensagemView'));        //colocar dentro dos parenteses onde quer add a msg (no html )
        this._mensagemView.update(this._mensagem);
    }
    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){             // tem underline na frente pq somente a classe ListaNegociacao pode chamar esse método ( não faz sentido outra classe chamá-lo)

        this._inputData.value  = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
