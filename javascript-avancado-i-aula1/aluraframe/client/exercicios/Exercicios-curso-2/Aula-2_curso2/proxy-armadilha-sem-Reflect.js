let funcionario = {
    email: 'abc@abc.com'
};

let proxyFuncionario = new Proxy(funcionario,{
    get(target, prop, receiver){
        console.log("Armadilha aqui");
        return target[prop];     // com essa instrução o valor é retornado diretamente, sem o get invocar uma função para obter o valor da prop original
    }
    
});

console.log(proxyFuncionario.email);