let numeros = [3, 2, 11, 20, 8, 7];
let novosNumeros = [];

numeros.forEach(item =>{

    if(item 2 % !=0){
        novosNumeros.push(item *2);
    } else{
        novosNumeros.push(item);
    }
});


function dobrarImpares(numeros) {
    let novosNumeros =  numeros.map(function (item, indice) {
        if (item % 2) { //3 resto 2 = 1 == true --> SE TEM RESTO = ITEM X2 
            item * 2;
        } else {
            item;           //SE NAO TEM RESTO NA DIV POR 2, VAI PRO ELSE E NAO MULTIPLICA
        }
         
    })
    console.log(numeros);
}

dobrarImpares();