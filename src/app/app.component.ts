import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoreServiceComponent } from './more-service/more-service.component';
import { FormComponent } from './form/form.component';
import { PowerfulComponent } from './powerful/powerful.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoreServiceComponent, FormComponent,PowerfulComponent,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fuel-kr';
}
