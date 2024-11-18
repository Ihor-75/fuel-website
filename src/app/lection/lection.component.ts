import { Brigade, Civil, TCK, Training, VLK } from './mobilization.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lection',
  standalone: true,
  imports: [],
  templateUrl: './lection.component.html',
  styleUrl: './lection.component.scss',
})
export class LectionComponent {
  constructor() {
    this.civil();
  }

  civil() {
    const civil = new Civil();
    const tck = new TCK();
    const vlk = new VLK();
    const training = new Training();
    const brigade = new Brigade();
  }
}
