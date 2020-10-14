class DateHelper {

    constructor(){
        throw new Error ('Esta classe não pode ser instanciada');
    }


    static dataParaTexto(data) {
        return `${data.getDate()} / ${(negociacao.data.getMonth() +1} / ${negociacao.data.getFullYear()}`;
    }

    static textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
    }


}

/*...spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor
split: separador '-' da string, tranformando-a em um array
.map(metodo q pode receber indice e/ou item do array como parametro da funcao)*/