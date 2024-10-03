import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pasword-univa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pasword-univa.component.html',
  styleUrl: './pasword-univa.component.scss',
})
export class PaswordUnivaComponent {
  constructor(private router: Router) {}
  openUnivaage() {
    this.router.navigate(['/univa']);
  }
}
