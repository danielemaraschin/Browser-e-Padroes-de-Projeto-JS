// class Negociacao {

//     mostra(texto){
//         texto = "aqui eh o Negociacao";
//         console.log(texto);
//     }
// }


class NegociacaoAcao  {
    mostra(texto){
        texto ="aqui eh o NegociacaoAcao"
        console.log(texto);
    }
}


class NegociacaoOpcao {
    mostra(texto){
        texto = "aqui eh o NegociacaoOpcao";
        console.log(texto)
    }
}
    

class NegociacaoFactory {
    static create(tipoNegociacao) {

        if (tipoNegociacao == "opcao") {
            return new NegociacaoOpcao()
        } else {
            return new NegociacaoAcao()
        }

        
    }
}


let tipoNegociacao = "opcao";
let returnaDeAcordoComOTipo = NegociacaoFactory.create(tipoNegociacao);

returnaDeAcordoComOTipo.mostra();
