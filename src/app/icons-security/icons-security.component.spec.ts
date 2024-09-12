import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSecurityComponent } from './icons-security.component';

describe('IconsSecurityComponent', () => {
  let component: IconsSecurityComponent;
  let fixture: ComponentFixture<IconsSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
