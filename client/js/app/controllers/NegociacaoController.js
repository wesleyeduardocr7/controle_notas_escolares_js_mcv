class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);        
        this._inputNome = $('#nome');
        this._inputNota1 = $('#nota1');
        this._inputNota2 = $('#nota2');
        this._inputPercentual = $('#percentual');
        this._inputProvaFinal = $('#provaFinal');
                
        this._listaNegociacoes = new ListaNegociacoes();
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
               
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);        
    }
    
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();   
    }
    
    _criaNegociacao() {
        
        return new Negociacao(this._inputNome.value,this._inputNota1.value,
        this._inputNota2.value, this._inputPercentual.value, this._inputProvaFinal.value);    
    }

    _limpaFormulario() {
     
        this._inputNome.value = '';
        this._inputNota1.value = '';
        this._inputNota2.value = '';
        this._inputPercentual.value = '';
        this._inputProvaFinal.value = '';
        
        this._inputNome.focus();   
    } 
}

document.getElementById('btLimpar').addEventListener('click', function (event) {
    
    document.getElementById('nome').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('percentual').value = '';
    document.getElementById('provaFinal').value = '';
});