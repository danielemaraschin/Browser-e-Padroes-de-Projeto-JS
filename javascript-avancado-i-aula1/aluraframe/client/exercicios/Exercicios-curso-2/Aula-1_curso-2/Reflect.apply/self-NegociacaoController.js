class NegociacaoController {

    constructor() { 
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this; // usar a let self e função não precisará ser arrow function;
        this._listaNegociacoes = new ListaNegociacoes(function(model) { 
            self._negociacoesView.update(model); // UMA ALTERNATIVA NO LUGAR DO CÓDIGO ABAIXO que está comentado
        });
         
       //this._listaNegociacoes = new ListaNegociacoes(model =>  
            //this._negociacoesView.update(model)); es
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#MensagemView'));        //colocar dentro dos parenteses onde quer add a msg (no html )
        this._mensagemView.update(this._mensagem);
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
        this._mensagemView.update(this._mensagem);

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
