class Negociacao {
    
    constructor(nome,nota1,nota2,percentual,provaFinal) {
        
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._percentual = percentual;
        this._provaFinal = provaFinal;
        Object.freeze(this);
    }
    
    get nome() {
        
        return this._nome;
    }
    
    get nota1() {
        
        return this._nota1;
    }
    
    get nota2() {
        
        return this._nota2;
    }
    
    get percentual() {
        
        return this._percentual;
    }

    get provaFinal(){

        return this._provaFinal;
    }

    get media(){
        return (Number(this.nota1) + Number(this.nota2)) /2 ;
    }
    
   get situacao(){

        if(this.percentual<75){

            return 'REPROVADO';            

        }else if(this.media > 70){

            return 'APROVADO';
            
        }else if(this.media >= 30 || this.media < 70) {

            let mediaFinal = (  Number(this.media) + Number(this.provaFinal)  ) / 2;
            
            if(mediaFinal < 5 ){
                return 'REPROVADO';
            }else{
                return 'APROVADO';
            }            
        }else{
            return 'REPROVADO'; 
        }
   }
    
}