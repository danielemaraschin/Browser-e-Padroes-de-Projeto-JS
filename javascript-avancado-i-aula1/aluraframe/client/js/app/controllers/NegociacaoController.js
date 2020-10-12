class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona (event){
        event.preventDefault();

        let data = new Date(        // isso cria uma objeto do tipo data 
            ...this._inputData.value // spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor    // isso pega uma sting "dd//mm/yyyy"
            .split('-')                //separador '-' da string, tranformando-a em um array
            .map((item, indice) => item - indice % 2)                              //metodo q pode receber indice e/ou item do array como parametro da funcao                          
        );       
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate()
        + '/' + (negociacao.data.getMonth() +1)
        + '/' + negociacao.data.getFullYear();          // full year pq se colocar so year sera so os 2 ultimos numeros

        console.log(diaMesAno);
    }
}