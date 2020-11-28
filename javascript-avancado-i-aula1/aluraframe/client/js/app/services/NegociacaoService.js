class NegociacaoService {

    obterNegociacoesDaSemana(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
  
        xhr.onreadystatechange = () => {
          if(xhr.readyState ==4) {
              if(xhr.status ==200) {
                  JSON.parse(xhr.responseText) // acesso às requisições retornadas do servidor.
                  .map(objeto => new Negociacao (New Date(objeto.data), objeto.quantidade, objeto.valor)) //Transforma JSON em objeto JS= pegar um array, varrer o array e criar um novo array MODIFICADO
                  .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); //Adicionar cada item desse novo array na lista de negociacoes
                  this._mensagem.texto = "Negociacões importadas com sucesso."
              }else{
                  console.log(xhr.responseText);
                  this._mensagem.texto = 'Não foi possível obter as negociações.'
              }
          }
        };
        xhr.send();
      }
}