import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaswordUnivaComponent } from '../pasword-univa/pasword-univa.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-univa',
  standalone: true,
  imports: [CommonModule, FormsModule, PaswordUnivaComponent, RouterModule],
  templateUrl: './univa.component.html',
  styleUrl: './univa.component.scss',
})
export class UnivaComponent {}
