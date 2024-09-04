import { Component } from '@angular/core';
import { FormComponent } from './../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PricingComponent } from '../pricing/pricing.component';





@Component({
  selector: 'app-third',
  standalone: true,
  imports: [ FormComponent, FooterComponent, HeaderComponent, PricingComponent],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss'
})
export class ThirdComponent {

}
