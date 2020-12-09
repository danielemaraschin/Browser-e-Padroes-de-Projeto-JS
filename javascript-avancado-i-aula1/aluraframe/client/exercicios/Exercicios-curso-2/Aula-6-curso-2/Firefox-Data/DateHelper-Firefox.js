class DateHelper {

    constructor(){
        throw new Error ('Esta classe não pode ser instanciada');
    }
    //Lançar erro no constructor para evitar que instanciem essa classe DateHelper
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
    static  textoParaData(texto){

        if(!/^\d{2}-\d{2}-\d{4}$/.test(texto))   // mudamos a validação para aceitar o novo formato!
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
         // usamos no split '/' no lugar de '-' por que é como separamos no html.
         // Usamos `reverse` também para ficar ano/mes/dia.  
         //A inversão dos itens do array é importante, porque a função map espera encontrar um array com ano, mês e dia e não dia, mês e ano.  
    }
}


/*spread operator = desmembra o array e o primeiro item do array, e cada parâmetro do Date será posicionado na mesma ordem no construtor
split: separador '-' da string, tranformando-a em um array
.map(metodo q pode receber indice e/ou item do array como parametro da funcao)*/
