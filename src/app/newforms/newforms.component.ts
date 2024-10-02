import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-newforms',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule,
  ],
  templateUrl: './newforms.component.html',
  styleUrl: './newforms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewformsComponent {
  firstName = '';
  LastName = '';

  email = '';
  phone = '';

  birthday: Date | null = null;
  age: number = 0;
  aboutYourself = '';

  password = '';
  sex = '';
  country = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  countries: string[] = [
    'Ukraine',
    'Poland',
    'USA',
    'UK',
    'Germany',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  showAllVariables() {
    console.log(this.firstName);
    console.log(this.LastName);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.birthday);
    console.log(this.password);
    console.log(this.age);
    console.log(this.aboutYourself);
    console.log(this.country);
    console.log(this.sex);
  }
}
