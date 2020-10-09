let numeros = [3,2,11,20,8,7];

let novosNumeros = 
 numeros.map(item => item %2 ?
    item :
    item *2)

console.log(novosNumeros);