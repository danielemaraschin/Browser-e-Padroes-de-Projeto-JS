class NegociacaoFactory {
    static create(tipoNegociacao, dados) {

        if (tipoNegociacao == "opcao") {
            return new NegociacaoOpcao(dados.data, dados.quantidade)
        }

        return NegociacaoAcao(dados.data, dados.quantidade);
    }
}

var negociacao = null;

let tipoNegociacao = "opcao";

let n = NegociacaoFactory.create("acao", {'data': new Date(), 'quantidade': 2});
