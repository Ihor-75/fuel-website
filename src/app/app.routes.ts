import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FoursComponent } from './fours/fours.component';
import { HeaderComponent } from './header/header.component';
import { NewformsComponent } from './newforms/newforms.component';

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
    path: 'header',
    component: FoursComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: '',
    redirectTo: 'e-commerce',
    pathMatch: 'full',
  },
];
