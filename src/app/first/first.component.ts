import { Component } from '@angular/core';
import { MoreServiceComponent } from './../more-service/more-service.component';
import { FormComponent } from './../form/form.component';
import { PowerfulComponent } from './../powerful/powerful.component';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './../calculator/calculator.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [
    MoreServiceComponent,
    FormComponent,
    PowerfulComponent,
    FooterComponent,
    HeaderComponent,
    CalculatorComponent,
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {}
