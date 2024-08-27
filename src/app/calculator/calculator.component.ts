import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  calculateString = '';

  // addOne() {
  //   this.calculateString = this.calculateString + '1';
  // }

  // addtoo() {
  //  this.calculateString = this.calculateString + '2';
  // }

  add(symbol: any) {
    this.calculateString = this.calculateString + symbol;
  }


  reset() {
    this.calculateString = '' ;
  }

  calculate() {
    console.log(this.calculateString);

    if (this.calculateString.includes('+')) {
      console.log('we have plus', this.calculateString[0], this.calculateString[1], this.calculateString[2]);

      const firstNumber = +this.calculateString[0];
      console.log('firstNumber:', firstNumber)
      const secondNumber = +this.calculateString[2];
      console.log('secondNumber:', secondNumber)

      const sum = firstNumber + secondNumber;
      console.log('sum:', sum)

      this.calculateString = sum.toString();
      console.log('calculateString:', this.calculateString)
    }
    if (this.calculateString.includes('/',)) {
      console.log('we have /', this.calculateString[0], this.calculateString[1], this.calculateString[2]);
      const firstNumber = +this.calculateString[0]
      console.log('firstnumber', firstNumber)
      const secondNumber = +this.calculateString[2]
      console.log('secondNumber', secondNumber)

      const divide = firstNumber / secondNumber;
      console.log('divide:', divide)

      this.calculateString = divide.toString()
      console.log('calculateString', this.calculateString)

    }
    if (this.calculateString.includes('-')) {
      console.log('we have -', this.calculateString[0], this.calculateString[1], this.calculateString[2])
      const firstnumber = +this.calculateString[0]
      console.log('firstNumber', firstnumber)
      const secondNumber = +this.calculateString[2]
      console.log('secondNumber', secondNumber)

      const minus = firstnumber - secondNumber;
      console.log('minus', minus)

      this.calculateString = minus.toString()
      console.log('calculeString', this.calculateString)
    }
  }

}
