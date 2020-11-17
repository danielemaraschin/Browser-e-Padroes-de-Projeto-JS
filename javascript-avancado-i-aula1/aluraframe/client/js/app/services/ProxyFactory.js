class ProxyFactory {
    static create (objeto, props, acao){

        return new Proxy(objeto, {
            get(target, prop, receiver) {                                                                               //verifica se dentro de prop, a propriedade que está sendo lida é uma das que quer interceptar (se está dentro do array),
                if (props.includes(prop) && typeof (target[prop]) == typeof (Function)){               //verifica se a prop de target é uma função
                    return function () {                                                                              // se tudo acima for verdadeiro substitui o método do proxy por outro (pela funcao abaixp reflect.apply)
                        console.log(`interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);               //arguments é um parametro acessivel em qualquer funcao, que dá acesso a todos os parametros da função 
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);                                                              //se nao for verdadeiro o if, entao vem pra cá, dá reflect get e deixa o código seguir
            },

            set (target, prop, value, receiver){
                if (props.includes(prop){
                    target(prop) = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}

//self._negociacoesView.update = return acao