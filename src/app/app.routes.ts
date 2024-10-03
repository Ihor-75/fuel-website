import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FoursComponent } from './fours/fours.component';
import { HeaderComponent } from './header/header.component';
import { NewformsComponent } from './newforms/newforms.component';
import { PlanComponent } from './plan/plan.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { UnivaComponent } from './univa/univa.component';
import { PaswordUnivaComponent } from './pasword-univa/pasword-univa.component';

export const routes: Routes = [
  {
    path: 'e-commerce',
    component: FirstComponent,
  },
  {
    path: 'products',
    component: SecondComponent,
  },
  {
    path: 'pricing',
    component: ThirdComponent,
  },
  {
    path: 'book a demo',
    component: FoursComponent,
  },
  {
    path: 'form',
    component: FooterComponent,
  },
  {
    path: 'univa',
    component: UnivaComponent,
  },
  {
    path: 'pasword-univa',
    component: PaswordUnivaComponent,
  },
  {
    path: '',
    redirectTo: 'univa',
    pathMatch: 'full',
  },
];
