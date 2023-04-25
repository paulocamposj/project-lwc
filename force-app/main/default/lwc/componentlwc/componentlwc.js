import { LightningElement } from 'lwc';

export default class Componentlwc extends LightningElement {
    
    empresa = 'Vitarella';
    cnpj = '07.206.816/0001-15';
    endereco = 'Eusébio/Ceará';

    produto = 'Treloso';
    preco = '2,00';
    descricao = 'Biscoito de Chocolate';

    oferta1 = 'Leve 2 por 3,50';
    oferta2 = 'Leve 5 e pague 4';

    visible1 = true;

    handleClick(){
        this.visible1 = !this.visible1;
    }
    
}