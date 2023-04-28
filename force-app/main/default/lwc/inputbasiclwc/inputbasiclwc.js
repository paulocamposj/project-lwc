import { LightningElement } from 'lwc';

export default class Inputbasiclwc extends LightningElement {

    nome;
    peso;
    altura;
    resultado;
    visible = false;
 
    nomeOnChange(event){
        this.nome = event.detail.value;
        if(this.nome === ''){
            this.visible = false;
        }
    }

    pesoOnChange(event) {
        this.peso = event.detail.value;
        
    }

    alturaOnChange(event) {
        this.altura = event.detail.value;
        
    }

   calcularImc() {
        let calculo = this.peso  / (this.altura * this.altura);
        this.resultado = calculo.toFixed(2);
        this.visible = true;
    }

}