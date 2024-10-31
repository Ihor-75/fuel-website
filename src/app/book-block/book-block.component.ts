import { BookIconComponent } from './../book-icon/book-icon.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BookReadyComponent } from '../book-ready/book-ready.component';
import { BoolCallComponent } from '../book-call/book-call.component';

@Component({
  selector: 'app-book-block',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BookReadyComponent,
    BoolCallComponent,
    BookIconComponent,
  ],
  templateUrl: './book-block.component.html',
  styleUrl: './book-block.component.scss',
})
export class BookBlockComponent {}
