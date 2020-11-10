class NegociacaoController {

    constructor() { //QUANDO uma controler eh criada..

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        let self = this;
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver) {                                                                               //verifica se dentro de prop, a propriedade que está sendo lida é uma das que quer interceptar (se está dentro do array),
                if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)){               //verifica se a prop de target é uma função
                    return function () {                                                                                // se tudo acima for verdadeiro substitui o método do proxy por outro (pela funcao abaixp reflect.apply)
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);                                                 //arguments é um parametro acessivel em qualquer funcao, que dá acesso a todos os parametros da função                      
                        self._negociacoesView.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);                                                              //se nao for verdadeiro o if, entao vem pra cá, dá reflect get e deixa o código seguir
            }
        });

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#MensagemView'));                                                          //colocar dentro dos parenteses onde quer add a msg (no html )
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
