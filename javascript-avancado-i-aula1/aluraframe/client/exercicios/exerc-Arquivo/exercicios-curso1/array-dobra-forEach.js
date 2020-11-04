let numeros = [3,2,11,20,8,7];
let novosNumeros = [];

numeros.forEach(item => {

    if(item % 2  != 0) {
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});
console.log(novosNumeros);