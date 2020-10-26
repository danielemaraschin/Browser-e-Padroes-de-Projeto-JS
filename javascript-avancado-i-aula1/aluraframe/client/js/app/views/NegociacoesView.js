class NegociacoesView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
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
        ${model.negociacoes.map(n =>          //isso precisa ser processado antes do template retornar a template string
            `<tr>
                    <td> ${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>
            `).join("")}                                    
        </tbody>

        <tfoot>
            <td colspan="3"></td> 
            <td> ${model.negociacoes.reduce((total, n ) => total + n.volume,0.0)}</td>    
        </tfoot>
    </table>
        `;
    }

    update(model){          // model é a lista de negociacoes
    
        // inerHTML transforma a string em elementos do DOM (se a string estiver com marcação correta) = será inserido como filho da div
    
        this._elemento.innerHTML = this._template(model); // innerHTML é o retorno da função template; = retorno da template é filho da div;
    }

//precisa retornar uma string para ser add ao template, por isso usamos o join

}
