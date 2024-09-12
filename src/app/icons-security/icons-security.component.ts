import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-security',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons-security.component.html',
  styleUrl: './icons-security.component.scss',
})
export class IconsSecurityComponent {
  @Input() config = {
    header: '',
    text: '',
    images: [] as string[],
  };

  allImages = false;
}
