var numeros = [1, 2, 3, 4]; // Produtório = 1 * 2 * 3 * 4 = 24

let numeros = [1, 2, 3, 4];
let resultado = numeros.reduce(function(total, num) {
    return total * num;
}, 1);