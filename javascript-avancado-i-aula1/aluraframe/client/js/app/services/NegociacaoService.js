class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana');     //.map tranforma a lista de objetos em lista de negociacoes
            .then(negociacoes =>{
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));   //tem ctz que já está no formato de um objeto
        });
            .catch(erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana');
            })  
    });
}