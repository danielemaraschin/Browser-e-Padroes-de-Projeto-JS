class ContaController{


    mostraSaldo (){
        var conta1 = new ContaCorrente(200);
        var conta2 = new ContaPoupanca(300);
        conta1.atualiza(2);
        conta2.atualiza(3);
        console.log(conta1.saldo);
        console.log(conta2.saldo);
    }
}



///////////////////////////

// criar um Conta2.html
//  instanciar controler e vai ter que chamar o saldo