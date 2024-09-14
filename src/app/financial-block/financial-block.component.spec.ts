import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialBlockComponent } from './financial-block.component';

describe('FinancialBlockComponent', () => {
  let component: FinancialBlockComponent;
  let fixture: ComponentFixture<FinancialBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
