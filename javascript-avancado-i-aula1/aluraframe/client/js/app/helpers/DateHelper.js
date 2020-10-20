class DateHelper {

    constructor(){
        throw new Error ('Esta classe não pode ser instanciada');
    }
    //Lançar erro no constructor para evitar que instanciem essa classe DateHelper
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
    static  textoParaData(texto){

        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
    }
}


/*spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor
split: separador '-' da string, tranformando-a em um array
.map(metodo q pode receber indice e/ou item do array como parametro da funcao)*/
