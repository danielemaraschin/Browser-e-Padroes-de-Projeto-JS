src="Exercicios-curso-2/Aula-2_curso2/Funcionario.js"


let funcionario = new Proxy(new Funcionario('abc@abc.com'), {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        console.log(prop);
        return Reflect.get(target, prop, receiver);
    }

});

console.log(funcionario.email);