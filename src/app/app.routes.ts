import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

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
    path: '3',
    component: ThirdComponent
  },
  {
    path: '',
    redirectTo: '3',
    pathMatch: 'full'
  }
];
