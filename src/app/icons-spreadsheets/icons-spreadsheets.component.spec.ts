import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSpreadsheetsComponent } from './icons-spreadsheets.component';

describe('IconsSpreadsheetsComponent', () => {
  let component: IconsSpreadsheetsComponent;
  let fixture: ComponentFixture<IconsSpreadsheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsSpreadsheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsSpreadsheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
