class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }


    adiciona (event){
        event.preventDefault();


        let data = new Date                                           // isso cria uma objeto do tipo data 
            (...                                                     // spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor
            this._inputData.value                                     // isso pega uma sting "dd//mm/yyyy"
            .split(-)                                                 //separador '-' da string, tranformando-a em um array
            .map((item, indice) => item - indice % 2)                              //metodo q pode receber indice e/ou item do array como parametro da funcao
                                   
        );    
        console.log(data);

        
        
        let negociacao = new Negociacao(
            data;
            this._inputQuantidade.value;
            this._inputValor.value;
           
        );
            console.log(negociacao);
    }
}