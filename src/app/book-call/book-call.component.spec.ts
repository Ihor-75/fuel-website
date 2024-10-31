import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolCallComponent } from './book-call.component';

describe('BoolCallComponent', () => {
  let component: BoolCallComponent;
  let fixture: ComponentFixture<BoolCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolCallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoolCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
