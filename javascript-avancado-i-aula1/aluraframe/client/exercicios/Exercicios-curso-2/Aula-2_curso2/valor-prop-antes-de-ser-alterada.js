class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}


let funcionario = {email: 'abc@abc.com'};

let funcionario = new Proxy(new Funcionario('abc@abc.com'), {

    set: (target, prop,value, receiver) {
        console.log(``);
        return Reflect.set(target, prop, value,receiver);
    }

});

funcionario.email = ("dani@alura.com");