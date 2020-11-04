let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);
console.log(lista1);
/*
O método push de todo array aceita receber os dados que você deseja incluir separados por vírgula,
ou seja, a função está preparada para receber N elementos.
Quando passamos a lista2 para lista1.push com o spread operator, 
cada item da lista será passado como um parâmetro para lista.push:



*/