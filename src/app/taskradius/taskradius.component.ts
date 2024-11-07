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
  R: number = 0;

  get area() {
    return this.R && this.R > 0 ? this.R * this.R * Math.PI : 0;
  }
  get length() {
    return this.R && this.R > 0 ? 2 * this.R * Math.PI : 0;
  }
}
