import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHoverBlockComponent } from '../header-hover-block/header-hover-block.component';
import { text } from 'stream/consumers';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeaderHoverBlockComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  blocksOpen = [false, false];

  blockall = [
    {
      headerhoverblock: 'block__list',
      list: [
        'Saas',
        'E-commerce',
        'Profesional services',
        'Construction',
        'Other',
      ],
      text: 'How Petcube became profitable with Fuelfinance',
      image: 'solutions.jpg',
      link_text: 'READ CASE STUDY ',
      link_ahref:
        'https://fuelfinance.me/petcube-case-study/?ref=land-book.com',
    },
    {
      headerhoverblock: 'block__list',
      list: ['All', 'Blog', 'Video', 'Templates', 'Case Studies'],

      text: 'Unit Economics Cheat Sheet',
      image: 'resoursec.png',
      link_text: 'GET YOUR FREE COPY ',
      link_ahref:
        'https://fuelfinance.me/petcube-case-study/?ref=land-book.com',
    },
  ];

  openBlock(block: number) {
    this.blocksOpen[block] = true;
  }
  closeBlock(block: number) {
    this.blocksOpen[block] = false;
  }
  constructor(private router: Router) {}
  openPricingPage() {
    this.router.navigate(['/book a demo']);
  }
  openFormgPage() {
    this.router.navigate(['/universities']);
  }
}
