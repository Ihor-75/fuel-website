import { Component } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { PowerfulComponent } from '../powerful/powerful.component';
import { StatementsComponent } from "../statements/statements.component";
import { FormComponent } from '../form/form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [HeaderComponent, StatementsComponent,FormComponent,FooterComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

}
