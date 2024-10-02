import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { PowerfulComponent } from '../powerful/powerful.component';
import { StatementsComponent } from '../statements/statements.component';
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { IconsIntegrationsComponent } from '../icons-integrations/icons-integrations.component';
import { IconsSecurityComponent } from '../icons-security/icons-security.component';
import { IconsSpreadsheetsComponent } from '../icons-spreadsheets/icons-spreadsheets.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    HeaderComponent,
    StatementsComponent,
    FormComponent,
    FooterComponent,
    CommonModule,
    IconsIntegrationsComponent,
    IconsSecurityComponent,
    IconsSpreadsheetsComponent,
    RouterModule,
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  pageobject = {
    header: 'Products',
    list: [
      'Financial Statements',
      'Dashboards',
      'Monthly updates',
      'Unit economics',
      'Financial Planning',
      'Plan/Actual analysis',
    ],
  };
}
