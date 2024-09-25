import { Component } from '@angular/core';
import { text } from 'stream/consumers';
import { PlanComponent } from '../plan/plan.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing-all',
  standalone: true,
  imports: [PlanComponent, CommonModule],
  templateUrl: './pricing-all.component.html',
  styleUrl: './pricing-all.component.scss',
})
export class PricingAllComponent {
  allImages: boolean = true;
  plans = [
    {
      header: 'Essential',
      active: false,
      text: ' Great for small teams that are getting started with their business',
      list: [
        'Dedicated Financial Manager',
        'P&L, CF, BS reports',
        'Burn Rate',
        'Monthly CF plan/actual reports',
        'Automated dashboards',
        'Payroll',
        'Slack Chat with Financial Manager',
      ],
      button: {
        link: 'https://fuelfinance.me/demo/?ref=land-book.com',
        text: 'Get a quote',
      },
    },
    {
      header: 'Growth',
      active: true,
      text: ' For growing teams that have raised some funding or gaining traction',
      list: [
        'Monthly P&L plan/actuals',
        'Operational Metrics plan/actuals',
        'Financial Model',
        'Monthly Unit Economics plan/actuals',
        'Weekly Plan/Actuals',
        'Automated Dashboard',
        'Scenario planning',
        'Reports for investors',
      ],
      button: {
        link: 'https://fuelfinance.me/demo/?ref=land-book.com',
        text: 'Get a quote',
      },
    },
    {
      header: 'Custom',
      active: false,
      text: '     You are a large business with complex structure or a startup turned rocketship',
      list: [
        'Daily Reports',
        'KPI analysis and recommendations',
        'Automation across departments',
        'Advanced dashboards for every department',
        'Sensitivity Analysis',
        'Pricing Strategy',
        'Ad-hoc integrations',
        'Cap Table Management',
      ],
      button: {
        link: 'https://fuelfinance.me/demo/?ref=land-book.com',
        text: 'Get a quote',
      },
    },
  ];
}
