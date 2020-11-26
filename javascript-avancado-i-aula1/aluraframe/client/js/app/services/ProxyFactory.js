class ProxyFactory {
    static create (objeto, props, acao){

        return new Proxy(objeto, {
            get(target, prop, receiver) {                                              //verifica se dentro de prop, a propriedade que está sendo lida é uma das que quer interceptar (se está dentro do array),
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){   //verifica se a prop de target é uma função
                    return function () {                     // se tudo acima for verdadeiro substitui o método do proxy por outro (pela funcao abaixp reflect.apply)
                        console.log(`interceptando ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);     //arguments é um parametro acessivel em qualquer funcao, que dá acesso a todos os parametros da função 
                        acao(target);
                        return retorno; 
                    }
                }
                return Reflect.get(target, prop, receiver);                                                              //se nao for verdadeiro o if, entao vem pra cá, dá reflect get e deixa o código seguir
            },

            set(target, prop, value, receiver) {    //precisamos usar o set por causa da mensagem,
                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) acao(target);    // só executa acao(target) se for uma propriedade monitorada
                return retorno; 
            }
        });
    }

    static _ehFuncao(func){
       return typeof (func) == typeof (Function);
    }
}

//self._negociacoesView.update = return acao