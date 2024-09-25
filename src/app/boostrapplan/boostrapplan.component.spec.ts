import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapplanComponent } from './boostrapplan.component';

describe('BoostrapplanComponent', () => {
  let component: BoostrapplanComponent;
  let fixture: ComponentFixture<BoostrapplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostrapplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
