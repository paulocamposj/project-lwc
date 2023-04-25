import { LightningElement } from 'lwc';

export default class Componentpokemon extends LightningElement {
    visiblee = false
    visible1 = true;
    visible2 = false;

    handleClick1() {
        this.visiblee = !this.visiblee;
    }

    handleClick() {
        this.visible1 = !this.visible1;
        this.visible2 = !this.visible2;
    }
}