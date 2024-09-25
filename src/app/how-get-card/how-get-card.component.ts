import { CommonModule } from '@angular/common';
import id from '@angular/common/locales/id';
import { Component, Input } from '@angular/core';
import { title } from 'process';
import { IconsIntegrationsComponent } from '../icons-integrations/icons-integrations.component';
import { text } from 'stream/consumers';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-how-get-card',
  standalone: true,
  imports: [CommonModule, ListItemComponent, ListItemComponent],
  templateUrl: './how-get-card.component.html',
  styleUrl: './how-get-card.component.scss',
})
export class HowGetCardComponent {
  @Input() config: any;
}
