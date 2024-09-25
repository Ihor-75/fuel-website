import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { link } from 'node:fs';

@Component({
  selector: 'app-boostrapplan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boostrapplan.component.html',
  styleUrl: './boostrapplan.component.scss',
})
export class BoostrapplanComponent {
  @Input() config = {
    header: '',
    image: '',
    list: [''],
    link: {
      link: '',
      text: '',
    },
    button: {
      link: '',
      text: '',
    },
  };
}
