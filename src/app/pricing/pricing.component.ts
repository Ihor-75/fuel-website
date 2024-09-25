import { Component } from '@angular/core';
import { PricingAllComponent } from '../pricing-all/pricing-all.component';
import { CommonModule } from '@angular/common';
import { BoostrapplanComponent } from '../boostrapplan/boostrapplan.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingAllComponent, CommonModule, BoostrapplanComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  boostrapplan = {
    header: 'BOOTSTRAP PLAN',
    image: 'bootstrap.png',
    list: [
      'P&L and planning for pre-seed stage startups.',
      'Get a clear picture of your finances.',
    ],
    link: {
      link: 'https://fuelfinance.me/bootstrap/?ref=land-book.com',
      text: ' Start for FREE',
    },
    button: {
      link: 'https://fuelfinance.me/bootstrap/?ref=land-book.com',
      text: 'Get more information',
    },
  };
}
