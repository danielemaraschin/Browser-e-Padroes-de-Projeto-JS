/*let lista = [10,1, 5, 9, 8, 12, 15];

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
var ordem = lista.sort(comparaNumeros);
var inversa = ordem.reverse
console.log(inversa); // exibe a lista na ordem decrescente
*/

let lista = [10,1, 5, 9, 8, 12, 15];

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

var ordem = lista.sort(comparaNumeros);
lista.sort(a, b);
lista.reverse();
console.log(lista);

