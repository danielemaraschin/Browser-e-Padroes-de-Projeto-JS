class NegociacaoService {

    constructor() {
        this._http = new HttpService();     //NegociacaoService é dependente de HttpService
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana');     //.map tranforma a lista de objetos em lista de negociacoes
            .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));   //tem ctz que já está no formato de um objeto
                });
            .catch (erro => {
                console.log(erro);
                reject('Não foi possível obter as negociações da semana');
                //O reject será responsável pela mensagem que será exibida para o usuário.
        })
    });

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this.http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                })
        });

        obterNegociacoesDaSemanaRetrasada() {

            return new Promise((resolve, reject) => {

                this.http
                    .get('negociacoes/retrasada')
                    .then(negociacoes => {
                        console.log(negociacoes);
                        resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    })
                    .catch(erro => {
                        console.log(erro);
                        reject('Não foi possível obter as negociações da semana retrasada');
                    })
            });
        }
    }
}