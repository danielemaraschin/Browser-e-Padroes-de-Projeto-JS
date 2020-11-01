abstract class View {

    //construtor omitido
 
     template(model) {
          throw new Error('Você deve sobrescrever este método em seu template');
     }
 
    //método update omitido
 }

 var view = new View(elemento); //faz sentido? ===> NAO!!
 //Criamos a classe View apenas para reutilizar o código mas não ter um objeto concreto dela
