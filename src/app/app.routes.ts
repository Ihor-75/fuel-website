import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: '1',
    component: FirstComponent
  },
  {
    path: '2',
    component: SecondComponent
  },
  {
    path: '',
    redirectTo: '2',
    pathMatch: 'full'
  }
];
