import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzformsComponent } from './dzforms.component';

describe('DzformsComponent', () => {
  let component: DzformsComponent;
  let fixture: ComponentFixture<DzformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DzformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
