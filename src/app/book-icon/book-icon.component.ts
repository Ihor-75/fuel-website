import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-icon.component.html',
  styleUrl: './book-icon.component.scss',
})
export class BookIconComponent {
  images = [
    'imageicon-1.png',
    'imageicon-2.png',
    'imageicon-3.png',
    'imageicon-4.png',
    'imageicon-5.png',
    'imageicon-6.png',
    'imageicon-7.png',
    'imageicon-8.png',
  ];
}
