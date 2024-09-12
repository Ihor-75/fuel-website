import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsIntegrationsComponent } from '../icons-integrations/icons-integrations.component';
import { IconsSecurityComponent } from '../icons-security/icons-security.component';
import { IconsSpreadsheetsComponent } from '../icons-spreadsheets/icons-spreadsheets.component';

@Component({
  selector: 'app-statements',
  standalone: true,
  imports: [
    CommonModule,
    IconsIntegrationsComponent,
    IconsSecurityComponent,
    IconsSpreadsheetsComponent,
  ],
  templateUrl: './statements.component.html',
  styleUrl: './statements.component.scss',
})
export class StatementsComponent {
  allImages: boolean = true;
  blockall = [
    {
      header: 'Security and Data',
      text: 'Fuel uses proprietary software to save the data in its secure cloud, which ensures that everything works fast, and no data is damaged.',
      images: ['under1.png'],
    },
    {
      header: 'Fuel Spreadsheets',
      text: 'What is so special about those Google Spreadsheets from Fuel? Can’t just anyone makes them? Well, not really. We constantly explore and implement the best practices in data models, security, reliability, and business-model-related ways to manage one’s finances and forecasting.',
      images: ['under2.png'],
    },
    {
      header: 'Integrations',
      text: 'We also have a suite of connectors to integrate with your most often-used 3rd-party services, and we keep those connectors updated as the services evolve.',
      images: [
        'under2.png',
        'under1.png',
        'under3.png',
        'under4.png',
        'under5.png',
        'under6.png',
        'under7.png',
        'under10 .png',
        'under8.png',
        'under9.png',
      ],
    },
  ];
}
