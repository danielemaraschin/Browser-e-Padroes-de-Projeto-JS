class DateHelper {

    dataParaTexto(data) {
        return data.getDate()
        + '/' + (negociacao.data.getMonth() +1)
        + '/' + negociacao.data.getFullYear();   // full year (4 numbers = 1990) pq se colocar so year sera so os 2 ultimos numeros (=90)
    }

    textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
    }


}

/*...spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor
split: separador '-' da string, tranformando-a em um array
.map(metodo q pode receber indice e/ou item do array como parametro da funcao)