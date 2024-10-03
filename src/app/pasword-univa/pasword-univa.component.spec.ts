import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswordUnivaComponent } from './pasword-univa.component';

describe('PaswordUnivaComponent', () => {
  let component: PaswordUnivaComponent;
  let fixture: ComponentFixture<PaswordUnivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaswordUnivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaswordUnivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
