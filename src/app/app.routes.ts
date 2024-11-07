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
import { UniversitiesComponent } from './universities/universities.component';
import { BookBlockComponent } from './book-block/book-block.component';
import { BookReadyComponent } from './book-ready/book-ready.component';
import { BoolCallComponent } from './book-call/book-call.component';
import { BookIconComponent } from './book-icon/book-icon.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { ResumeComponent } from './resume/resume.component';
import { TaskradiusComponent } from './taskradius/taskradius.component';

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
    path: 'universities',
    component: UniversitiesComponent,
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
    path: 'book-a-demo',
    component: BookBlockComponent,
  },
  {
    path: '88',
    component: BookIconComponent,
  },
  {
    path: 'font-style',
    component: FontStyleComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'taskradius',
    component: TaskradiusComponent,
  },
  {
    path: '',
    redirectTo: 'taskradius',
    pathMatch: 'full',
  },
];
