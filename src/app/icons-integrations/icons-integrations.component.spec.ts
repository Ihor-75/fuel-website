import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsIntegrationsComponent } from './icons-integrations.component';

describe('IconsIntegrationsComponent', () => {
  let component: IconsIntegrationsComponent;
  let fixture: ComponentFixture<IconsIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsIntegrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
