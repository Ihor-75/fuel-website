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
  area: number = 0;
  length: number = 0;
  diametr: number = 0;

  calculateAreaLenght() {
    this.area = Math.round(
      this.R && this.R > 0 ? this.R * this.R * Math.PI : 0
    );
    this.length = Math.round(this.R && this.R > 0 ? 2 * this.R * Math.PI : 0);
    this.diametr = this.R && this.R > 0 ? 2 * this.R : 0;
  }
}
