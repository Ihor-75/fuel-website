import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHoverBlockComponent } from '../header-hover-block/header-hover-block.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderHoverBlockComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  blocksOpen = [false, false];

  openBlock(block: number) {
    this.blocksOpen[block] = true;
  }
  closeBlock(block: number) {
    this.blocksOpen[block] = false;
  }
}
