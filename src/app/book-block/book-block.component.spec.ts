import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBlockComponent } from './book-block.component';

describe('BookBlockComponent', () => {
  let component: BookBlockComponent;
  let fixture: ComponentFixture<BookBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
