import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { IconsIntegrationsComponent } from '../icons-integrations/icons-integrations.component';
import { IconsSecurityComponent } from '../icons-security/icons-security.component';
import { IconsSpreadsheetsComponent } from '../icons-spreadsheets/icons-spreadsheets.component';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SecondComponent,
        IconsIntegrationsComponent,
        IconsSecurityComponent,
        IconsSpreadsheetsComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
