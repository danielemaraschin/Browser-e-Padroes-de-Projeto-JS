class Bind{
    constructor(model, view, ...props){

        let proxy = ProxyFactory.create(model, props, model =>  //cria um proxy com esse model,essa props, 
            view.update(model));          //quando elas forem acessadas faz a acao da arrow function acima: atualizar tela (view.update(model))
        
        view.update(model);    // atualiza a tela antes de devolver o proxy

        return proxy;       // retorna o proxy;
    }
    
}