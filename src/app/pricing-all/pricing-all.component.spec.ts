import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAllComponent } from './pricing-all.component';

describe('PricingAllComponent', () => {
  let component: PricingAllComponent;
  let fixture: ComponentFixture<PricingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
