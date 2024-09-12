import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-integrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons-integrations.component.html',
  styleUrl: './icons-integrations.component.scss',
})
export class IconsIntegrationsComponent {
  allImages: boolean = true;
}
