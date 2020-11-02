class NegociacoesView extends View {
 
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
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
            `).join("")}       //precisa retornar uma string para ser add ao template, por isso usamos o join                            
        </tbody>

        <tfoot>
            <td colspan="3"></td> 
            <td> ${model.negociacoes.reduce((total, n ) => total + n.volume,0.0)}</td>    
        </tfoot>
    </table>
        `;
    }
}
