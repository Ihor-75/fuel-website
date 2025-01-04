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
import { Router, RouterModule } from '@angular/router';
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}
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
  }

  onSubmit(): void {
    if (this.universityForm.valid) {
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
