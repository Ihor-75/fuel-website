import { config } from './../app.config.server';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-hover-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-hover-block.component.html',
  styleUrl: './header-hover-block.component.scss',
})
export class HeaderHoverBlockComponent {
  @Input() config = {
    text: '',
    list: [] as string[],
    image: '',
    link_text: '',
    link_ahref: '',
  };
}
