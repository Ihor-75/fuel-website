import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  pageall = [
    {
      footer: 'Fuelfinance',
      list: ['Book a demo', 'Products', 'Pricing'],
    },
    {
      footer: 'Solutions',
      list: [
        'Saas',
        'E-commerce ',
        'Professional services',
        'Construction',
        'Other',
      ],
    },
    {
      footer: 'Resources',
      list: ['Blog', 'Case Studies', 'Video', 'Templates'],
    },
    {
      footer: 'Company',
      list: ['Careers'],
    },
  ];

  socialMedia = [
    {
      name: 'Facebok',
      url: 'https://www.facebook.com/fuelfinance',
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/fuelfinance_',
      icon: 'twitter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: 'instagram',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@fuelfinance',
      icon: 'youtube',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE-p9Sht03uAgAAAZHNCzNIGve8wwh2yban20aoQB2C0nozEBDF5uf06hht2TGVaMl8nHL9cPWDZOPTHpFinwDzwGqH7iwNK2d5MSrXGmTx5ZyQUAdl9x9IVqZfHm-gyhsN5n0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ffuelfinance%2F',
      icon: 'linkedin',
    },
  ];
  item: any;
}
