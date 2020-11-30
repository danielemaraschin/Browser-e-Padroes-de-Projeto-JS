fs = require('fs');
fs.readFile('./arquivo.txt', function(erro, dados) { //função readFile recebe como segundo parâmetro o callback,
    if(erro) {                                      //cb tem dois parâmetros: o erro e os dados;
        console.log('Um erro ocorreu');            //dentro do callback testamos o erro!
        return;
    }
    console.log(dados);
});
