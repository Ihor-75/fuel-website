import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-taskradius',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './taskradius.component.html',
  styleUrl: './taskradius.component.scss',
})
export class TaskradiusComponent {
  /* R: number = 0;

  get area() {
    return this.R * this.R * Math.PI;
  }
  get length() {
    return 2 * this.R * Math.PI;
  } */
  r: number | null = null;

  get area(): number {
    return this.r ? Math.PI * Math.pow(this.r, 2) : 0;
  }

  get circumference(): number {
    return this.r ? 2 * Math.PI * this.r : 0;
  }
}
