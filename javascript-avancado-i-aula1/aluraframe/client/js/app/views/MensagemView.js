class MensagemView extends View {

    constructor(elemento) {
        super(elemento);
    }
    
    _template() {
        throw new Error('O método template deve ser implementado');
    }

    _template (model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    } 

}