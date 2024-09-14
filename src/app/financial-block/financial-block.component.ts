import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { reverse } from 'dns';

@Component({
  selector: 'app-financial-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-block.component.html',
  styleUrl: './financial-block.component.scss',
})
export class FinancialBlockComponent {
  @Input() config = {
    text: '',
    list: [] as string[],
    image: '',
    reverse: false,
  };
}
