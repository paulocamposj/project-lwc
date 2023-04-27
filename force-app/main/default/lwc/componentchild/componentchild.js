import { LightningElement, api } from 'lwc';

export default class Componentson extends LightningElement {

@api firstname;
@api lastname;
@api age;
@api email;
@api rating;
@api company;
@api annualrevenue;
}