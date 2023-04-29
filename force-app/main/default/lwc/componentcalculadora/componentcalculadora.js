import { LightningElement, track } from 'lwc';

export default class Componentcalculadora extends LightningElement {

@track inputValue = '';
@track errorMessage = '';

  handleNumberClick(event) {
    const clickedNumber = event.target.label;
    this.inputValue += clickedNumber;
  }

  handleOperatorClick(event) {
    const clickedOperator = event.target.label;
    this.inputValue += clickedOperator;
  }

  handleResultClick(event){
    if(this.inputValue)
    this.inputValue
  }


  handleClearClick() {
    this.inputValue = '';
  }

  handleEqualClick() {

      if (this.inputValue.includes('/0')) {
          this.inputValue = 'Não é possível';
      }else{
          const result = eval(this.inputValue);
          this.inputValue = result.toString();
      }
  }
}