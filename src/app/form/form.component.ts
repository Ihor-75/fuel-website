import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

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

}
