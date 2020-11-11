let funcionario = {
    email: 'abc@abc.com'
};

let proxyFuncionario = new Proxy(funcionario,{
    get(target, prop, receiver){
        console.log("Armadilha aqui");
        return Reflect.get(target, prop, receiver);   
    }                                                  
    
});

console.log("**" + proxyFuncionario.email + "**");
console.log(`**${proxyFuncionario.email}**`);
