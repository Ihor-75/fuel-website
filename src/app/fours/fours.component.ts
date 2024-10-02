import { Component } from '@angular/core';
import { DzformsComponent } from '../dzforms/dzforms.component';
import { CommonModule } from '@angular/common';
import { NewformsComponent } from '../newforms/newforms.component';

@Component({
  selector: 'app-fours',
  standalone: true,
  imports: [DzformsComponent, CommonModule, NewformsComponent],
  templateUrl: './fours.component.html',
  styleUrl: './fours.component.scss',
})
export class FoursComponent {}
