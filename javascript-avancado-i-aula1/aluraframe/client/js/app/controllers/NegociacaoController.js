class NegociacaoController {

    constructor() { //QUANDO uma controler eh criada..

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'], (model) =>  // nao precisa de parenteses nesse model pq eh so 1 parametro
            this._negociacoesView.update(model));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = ProxyFactory.create(
            new Mensagem(),['texto'], model =>    // nao precisa de parenteses nesse model pq eh so 1 parametro
            this._mensagemView.update(model));

        this._mensagemView = new MensagemView($('#MensagemView'));   //colocar dentro dos parenteses onde quer add a msg (no html )
        this._mensagemView.update(this._mensagem); //quando atualiza tela, nao so quando algo é modificado pelo adiciona/apaga
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso.';
        this._limpaFormulario();
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
