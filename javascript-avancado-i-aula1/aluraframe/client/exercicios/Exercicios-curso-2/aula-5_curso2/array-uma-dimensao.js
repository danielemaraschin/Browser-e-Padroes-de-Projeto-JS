let dadosServidor = [
    [
        [new Date(), 1, 100],
        [new Date(), 2, 100]
    ],
    [
        [new Date(), 1, 150],
        [new Date(), 2, 300]
    ],
    [
        [new Date(), 3, 50],
        [new Date(), 1, 100]
    ]        
];

  // novoArray receberá os itens de array, no final terá uma dimensão apenas
let listaDeNegociacoes = dadosServidor
.reduce((novoArray, array)  => novoArray.concat(array), [])
.map(dado => 
    new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));               


// para cada dado( cada item/indice do novo array), cria uma instância de negociação. No final, teremos uma nova lista só com instâncias de Negociacao