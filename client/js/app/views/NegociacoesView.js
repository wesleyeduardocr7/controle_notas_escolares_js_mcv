class NegociacoesView extends View {
     
    constructor(elemento) {
        super(elemento);
    }
   
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>NOTA 1</th>
                    <th>NOTA 2</th>
                    <th>PERCENTUAL</th>
                    <th>PROVA FINAL</th>
                    <th>MÉDIA FINAL</th>
                    <th>SITUAÇÃO</th>
                    <th>Nº APROVADOS</th>
                    <th>Nº REPROVADOS</th>
                    <th>MÉDIA GERAL</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>                        
                        <td>${n.nome}</td>
                        <td>${n.nota1}</td>
                        <td>${n.nota2}</td>
                        <td>${n.percentual}</td>
                        <td>${n.provaFinal}</td>
                        <td>
                            ${n.media}
                        </td>                        
                        <td>
                             ${n.situacao}
                        </td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
            
                <td colspan="7"></td>

                <td>
                    ${model.negociacoes.reduce((total, valor) => total + ( valor.situacao == 'APROVADO' ? 1 : 0 ) , 0 )}
                </td>

                <td>
                    ${model.negociacoes.reduce((total, valor) => total + ( valor.situacao == 'REPROVADO' ? 1 : 0 ) , 0 )}
                </td>

                <td>
                    ${
                        model.negociacoes.reduce((somaMedias, valor) => (somaMedias) + (valor.media), 0.0) 
                        /model.negociacoes.reduce((iterador) => (iterador) + 1 , 0)
                    }
                </td>
            </tfoot>
            
        </table>
        `;
    }
    
}
