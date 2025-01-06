import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UniversitiesService } from './../services/universities.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from './services/api.service';
import { Univercity } from './services/university.model';
import { Router } from '@angular/router';

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
    ReactiveFormsModule,
  ],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss',
})
export class UniversitiesComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  universities: Univercity[] = [];
  allUnivercities: Univercity[] = [];
  constructor(
    private UniversitiesService: UniversitiesService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.getUniversities();
    this.getLocalUnivertisies();
    /*    this.apiService
      .createUnivercity({
        domains: ['amuz.krakow.pl'],
        stateProvince: null,
        alphaTwoCode: 'UA',
        country: 'Ukraine',
        name: 'Music Academy M. Lysenko',
        webPages: ['http://www.amuz.krakow.pl/'],
        id: 999,
      })
      .subscribe((data) => {
        console.log('Create univercity: ', data);
      }); */
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

  getLocalUnivertisies() {
    this.apiService.getUnivercities().subscribe((data: Univercity[]) => {
      console.log(data);
      this.universities = data;
      this.universities.sort((a, b) => a.id - b.id);
      this.allUnivercities = [...data];
    });
  }

  deleteUniversity(id: number) {
    this.apiService.deleteUnivercity(id).subscribe((response) => {
      this.getLocalUnivertisies();
      // this.univercities = this.univercities.filter((item: any) => item.id !== id);
      console.log('Delete univercity: ', response);
    });
  }
  openCreatePage() {
    this.router.navigate(['universities/create']);
  }
}
