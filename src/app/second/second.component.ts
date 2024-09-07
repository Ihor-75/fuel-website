import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { PowerfulComponent } from '../powerful/powerful.component';
import { StatementsComponent } from "../statements/statements.component";
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [HeaderComponent, StatementsComponent,FormComponent,FooterComponent, CommonModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
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
    ]
  }


}
