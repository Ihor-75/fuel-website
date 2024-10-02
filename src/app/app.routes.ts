import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FoursComponent } from './fours/fours.component';

export const routes: Routes = [
  {
    path: '1',
    component: FirstComponent,
  },
  {
    path: '2',
    component: SecondComponent,
  },
  {
    path: '3',
    component: ThirdComponent,
  },
  {
    path: '4',
    component: FoursComponent,
  },

  {
    path: '',
    redirectTo: '4',
    pathMatch: 'full',
  },
];
