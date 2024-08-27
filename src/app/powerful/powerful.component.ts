import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-powerful',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './powerful.component.html',
  styleUrl: './powerful.component.scss'
})
export class PowerfulComponent {
  date = new Date();
  counter = 0;

  incrementCounter() {
    this.counter = this.counter + 1;
  }

  nextDay() {
    const newDate = this.date.getDate() + 1;
    console.log(this.date);
    this.date = new Date(this.date.setDate(newDate) );
  }
}
