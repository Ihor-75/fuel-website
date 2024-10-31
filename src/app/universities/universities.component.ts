import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UniversitiesService } from './../services/universities.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-universities',
  standalone: true,
  providers: [UniversitiesService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class UniversitiesComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  constructor(private UniversitiesService: UniversitiesService) {}

  universities: {
    name: string;
    web_pages: string[];
    country: string;
    alpha_two_code: string;
    domains: string[];
  }[] = [];

  ngOnInit() {
    this.getUniversities();
  }
  country: string = 'Ukraine';
  countries: string[] = [
    'Ukraine',
    'Poland',
    'Canada',
    'Italy',
    'United States',
  ];
  getUniversities() {
    this.UniversitiesService.getUniversitiesBycountry(this.country).subscribe(
      (data: any) => {
        console.log(data);

        if (data.lenght === 0) {
          this._snackBar.open('No universities found', 'Close', {
            duration: 2000,
          });
        } else {
          this._snackBar.open('Universities found: ' + data.length, 'Close', {
            duration: 2000,
          });
        }
        this.universities = data;
      }
    );
  }
}
