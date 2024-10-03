import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivaComponent } from './univa.component';

describe('UnivaComponent', () => {
  let component: UnivaComponent;
  let fixture: ComponentFixture<UnivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
