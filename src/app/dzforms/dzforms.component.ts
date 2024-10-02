import { Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dzforms',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './dzforms.component.html',
  styleUrl: './dzforms.component.scss',
})
export class DzformsComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  імя: string = '';
  прізвище: string = '';

  номер_телефону: string = '';
  email: string = '';
  пароль: string = '';

  Дата_народження: Date | null = null;
  вік: number = 0;
  стать: string = '';

  спосіб_доставки: string = '';
  місто: string = '';
  адреса: string = '';
}
