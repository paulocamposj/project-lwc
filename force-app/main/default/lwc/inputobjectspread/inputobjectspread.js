import { LightningElement } from 'lwc';

export default class Inputobjectspread extends LightningElement {

    input = {
        firstname: '',
        lastname: '',
        email: '',
        website: '',
        company: '',
        annualrevenue: ''
    }

    handleOnChange(event){

        let value = event.detail.value;
        let key = event.target.name;

        this.input = {
           ... this.input, [key]: value
        };

        let objetoMontando = JSON.stringify(this.input);
        let objetoJSON = JSON.parse(objetoMontando);
        console.log(objetoJSON);
    }
    
}