let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];

let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
});

/*
Cada map recebe uma função como parâmetro,
e em cada uma dessas funções,
utilizamos um parâmetro que é o elemento de cada índice da array 
que deverá ser retornado em cada iteração.
*/