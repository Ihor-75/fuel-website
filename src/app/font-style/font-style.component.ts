import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-font-style',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './font-style.component.html',
  styleUrl: './font-style.component.scss',
})
export class FontStyleComponent {
  fontSize!: string;
  fontWeight!: string;
  fontStyle!: string;
  color!: string;

  linkText!: string;
  linkHref!: string;
  imageSrc!: string;
}
