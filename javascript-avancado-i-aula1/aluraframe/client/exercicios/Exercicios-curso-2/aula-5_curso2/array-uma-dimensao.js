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

let listaDeNegociacoes = dadosServidor.reduce((novoArray, array) => {
    // novoArray receberá os itens de array, no final terá uma dimensão apenas
    return novoArray.concat(array)
}, [])
.map(dado => {
    // para cada dado, cria uma instância de negociação. No final, teremos uma nova lista só com instâncias de Negociacao

    return new Negociacao(new Date(dado.data), dado.quantidade, dado.valor )
});