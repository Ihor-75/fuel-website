import id from '@angular/common/locales/id';
import { Univercity } from './../services/university.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-university',
  standalone: true,
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
  templateUrl: './create-university.component.html',
  styleUrl: './create-university.component.scss',
})
export class CreateUniversityComponent {
  universityForm!: FormGroup;
  routeId: string;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}
  getUnivercity(id: number) {
    this.apiService.getUnivercity(id).subscribe((university) => {
      this.universityForm.patchValue(university);
      //console.log(university);
    });
  }
  openListPage() {
    this.router.navigate(['universities/']);
  }
  ngOnInit(): void {
    this.universityForm = this.fb.group({
      id: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(255)]],
      alphaTwoCode: ['', [Validators.required, Validators.maxLength(2)]],
      domains: [[], [Validators.required]],
      stateProvince: [null],
      country: ['', [Validators.required]],
      webPages: [[], [Validators.required]],
    });
    this.activateRoute.params.subscribe((params: { id: string }) => {
      this.routeId = params.id;
      if (params.id) {
        this.getUnivercity(+params.id);
      }
    });
  }

  onSubmit(): void {
    if (this.universityForm.valid) {
      if (this.routeId) {
        this.apiService
          .updateUnivercity(+this.routeId, this.universityForm.value)
          .subscribe(() => {
            this.openListPage();
          });
        return;
      } else {
        this.apiService
          .createUnivercity(this.universityForm.value)
          .subscribe(() => {
            this.openListPage();
          });
      }
      this.apiService
        .createUnivercity(this.universityForm.value)
        .subscribe(() => {
          this.openListPage();
        });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
