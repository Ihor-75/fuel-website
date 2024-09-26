import { Component } from '@angular/core';
import { FormComponent } from './../form/form.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PricingComponent } from '../pricing/pricing.component';
import { HowGetCardComponent } from '../how-get-card/how-get-card.component';
import { NepaliDatepickerModule } from 'nepali-datepicker-angular';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [
    FormComponent,
    FooterComponent,
    HeaderComponent,
    PricingComponent,
    HowGetCardComponent,
    HowGetCardComponent,
    NepaliDatepickerModule,
  ],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent {
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
}
