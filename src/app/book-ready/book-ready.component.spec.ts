import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadyComponent } from './book-ready.component';

describe('BookReadyComponent', () => {
  let component: BookReadyComponent;
  let fixture: ComponentFixture<BookReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReadyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
