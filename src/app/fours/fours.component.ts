import { Component, importProvidersFrom } from '@angular/core';
import { HowGetCardComponent } from '../how-get-card/how-get-card.component';
import { CommonModule } from '@angular/common';
import { NepaliDatepickerModule } from 'nepali-datepicker-angular';
import { MaterialComponent } from '../material/material.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fours',
  standalone: true,
  providers: [provideNativeDateAdapter(), provideAnimations()],
  imports: [
    HowGetCardComponent,
    CommonModule,
    NepaliDatepickerModule,
    MaterialComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './fours.component.html',
  styleUrl: './fours.component.scss',
})
export class FoursComponent {
  config = {
    howToGetCard: {
      title: 'Як одержати картку monobank?',
      steps: [
        {
          stepNumber: 1,
          icon: '1.png',
          title: 'Введіть номер телефону',
          description: 'Введіть номер телефону або встановіть застосунок з ',
          links: [
            {
              url: 'https://apps.apple.com/ua/app/apple-store/id1287005205?l=uk',
              text: 'App Store',
            },
            {
              url: 'https://play.google.com/store/apps/details?id=com.ftband.mono&ddl=1&pcampaignid=web_ddl_1',
              text: 'Google Play',
            },
          ],
        },
        {
          stepNumber: 2,
          icon: '2.png',
          title: 'Завантажте документи',
          description:
            'Сфотографуйте паспорт та код або завантажте документи через Дію',
        },
        {
          stepNumber: 3,
          icon: '3.png',
          title: 'Отримання картки',
          description:
            'Виберіть отримання віртуальної картки або заберіть картку в найближчій точці видачі. Це безкоштовно',
        },
      ],
    },
  };
  maxDate: any;
  minDate: any;
}
