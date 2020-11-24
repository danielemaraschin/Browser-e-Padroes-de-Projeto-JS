class Negociacao {
    constructor(){
        
    }
    mostra(texto){
        console.log("aqui eh o Negociacao")
    }
}


class NegociacaoAcao  {
    mostra(){
        console.log("aqui eh o NegociacaoAcao")
    }
}


class NegociacaoOpcao {
    mostra(){
        console.log("aqui eh o NegociacaoOpcao")
    }
}
    

class NegociacaoFactory {
    static create(tipoNegociacao) {

        if (tipoNegociacao == "opcao") {
            return new NegociacaoOpcao();
        } else {
            return new NegociacaoAcao();
        }

        
    }
}


let tipoNegociacao = "opcao";
let returnaDeAcordoComOTipo = NegociacaoFactory.create(tipoNegociacao);

returnaDeAcordoComOTipo.mostra();
