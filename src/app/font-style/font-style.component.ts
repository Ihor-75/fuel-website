import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-font-style',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './font-style.component.html',
  styleUrl: './font-style.component.scss',
})
export class FontStyleComponent {
  fontSize!: string;
  fontWeight!: string;
  fontStyle!: string;
  fontColor!: string;
}
