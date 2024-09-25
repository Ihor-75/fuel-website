import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent {
  @Input() config = {
    header: '',
    active: false,
    text: '',
    list: [''],
    button: {
      link: '',
      text: '',
    },
  };
}
