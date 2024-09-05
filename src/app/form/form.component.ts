import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  calculateString = '';

 /*addOne() {
    this.calculateString = this.calculateString + '1';
  }

  addtoo() {
   this.calculateString = this.calculateString + '2';
  }*/

  add(symbol: any) {
   this.calculateString = this.calculateString + symbol;
  }

  calculate() {
    console.log(this.calculateString);
  }
  reset() {
    this.calculateString = '';

    if (this.calculateString.includes('+')) {
      console.log('we have plus', this.calculateString);

      const numbers = this.calculateString.split('+');
       console.log('numbers:', numbers[0], numbers[1])

      const firstNumber = +numbers[0];
      console.log('firstNumber:', firstNumber)
      const secondNumber = +numbers[1];
      console.log('secondNumber:', secondNumber)

      const sum = firstNumber + secondNumber;
      console.log('sum:', sum)

      this.calculateString = sum.toString();
      console.log('calculateString:', this.calculateString)
    }
    if (this.calculateString.includes('/',)) {
      console.log('we have /', this.calculateString);

      const numbers = this.calculateString.split('/')
      console.log('numbers', numbers[0], numbers[1])

      const firstNumber = +numbers[0];
      console.log('firstNumber:', firstNumber)
      const secondNumber = +numbers[1];
      console.log('secondNumber:', secondNumber)


      const divide = firstNumber / secondNumber;
      console.log('divide:', divide)

      this.calculateString = divide.toString()
      console.log('calculateString', this.calculateString)

    }
    if (this.calculateString.includes('-')) {
      console.log('we have -', this.calculateString)

      const numbers = this.calculateString.split('-')
      console.log('numbers', numbers[0], numbers[1])

      const firstnumber = +numbers[0]
      console.log('firstNumber', firstnumber)
      const secondNumber = +numbers[1]
      console.log('secondNumber', secondNumber)

      const minus = firstnumber - secondNumber;
      console.log('minus', minus)

      this.calculateString = minus.toString()
      console.log('calculeString', this.calculateString)
    }
  }
  age: number = 25
  birthday = new Date(1996, 5, 4);

  calculateAge() {

    const date = new Date(this.birthday);
   /* console.log('calculateAge', date.getFullYear());*/

    const year = date.getFullYear();

    const currentYear = new Date().getFullYear();
    

    this.age = currentYear - year;
}

}
