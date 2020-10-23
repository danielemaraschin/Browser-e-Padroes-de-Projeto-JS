class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        return `
    
 <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        </tfoot>
    </table>
        `;
    }

    update(){
    
        // inerHTML transforma a string em elementos do DOM (se a string estiver com marcação correta) = será inserido como filho da div
    
        this._elemento.innerHTML = this._template(); // innerHTML é o retorno da função template; = retorno da template é filho da div;
    }



}
