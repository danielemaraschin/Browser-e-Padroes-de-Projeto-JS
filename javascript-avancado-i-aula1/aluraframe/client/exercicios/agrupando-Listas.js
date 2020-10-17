function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);

let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);