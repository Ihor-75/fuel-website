import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsIntegrationsComponent } from '../icons-integrations/icons-integrations.component';
import { IconsSecurityComponent } from '../icons-security/icons-security.component';
import { IconsSpreadsheetsComponent } from '../icons-spreadsheets/icons-spreadsheets.component';
import { FinancialBlockComponent } from '../financial-block/financial-block.component';
import { text } from 'stream/consumers';
import { reverse } from 'dns';

@Component({
  selector: 'app-statements',
  standalone: true,
  imports: [
    CommonModule,
    IconsIntegrationsComponent,
    IconsSecurityComponent,
    IconsSpreadsheetsComponent,
    FinancialBlockComponent,
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

  financialblockall = [
    {
      text: 'Three basic financial statements',
      list: [
        'Profit and Loss (also known as P&L)',
        'Cash Flow',
        'Balance Sheet',
      ],
      image: 'image1.svg',
      reverse: false,
    },
    {
      image: 'image2.svg',
      text: 'A monthly process to update the statements',
      list: [
        'Integrate with existing reports and departments',
        'We suggest new flows and metrics where needed',
        ' Your regular management process now feeds information into financial reports and forecasts',
      ],
      reverse: true,
    },
    {
      text: 'Financial projections/planning',
      list: [
        'Based on your historical data and future plans, we build two versions of forecast which show the band of future possibilities',
        'We update this forecast monthly/weekly',
      ],
      image: 'image3.svg',
      reverse: false,
    },
    {
      image: 'image4.svg',
      text: 'Plan/Actual analysis',
      list: [
        'One of the most helpful processes and when conducted on monthly basis, allows to achieve high-precision forecasting',
      ],
      reverse: true,
    },
    {
      text: 'Unit economics',
      list: [
        'Shows how your lifetime value (LTV) compares with your customer acquisition cost (CAC)',
        'Allows for correct sales and marketing planning on daily- or per-campaign- basis',
        '    Creates a framework to highlight non-obvious expenses that scale with user base growth',
      ],
      image: 'image5.svg',
      reverse: false,
    },
    {
      image: 'image6.svg',
      text: 'Dashboards',
      list: [
        'Depending on your business model, we use best practices and recommend which KPIs you should be focused on',
        'Fully customizable and tailored for you by your dedicated manager',
      ],
      reverse: true,
    },
  ];
}
