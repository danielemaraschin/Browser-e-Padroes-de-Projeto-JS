function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);


exibeNoConsole([].concat(listaDeNomes1,listaDeNomes2));