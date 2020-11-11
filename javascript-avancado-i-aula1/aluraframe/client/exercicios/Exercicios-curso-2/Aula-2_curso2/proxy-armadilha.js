let funcionario = {
    email: 'abc@abc.com'
};

let proxyFuncionario = new Proxy(funcionario,{
    get(target, prop, receiver){
        console.log("Armadilha aqui");
        return Reflect.get(target, prop, receiver);     // essa instrução que efetivamente realiza a operação no objeto real. 
    }
    
});

console.log(proxyFuncionario.email);