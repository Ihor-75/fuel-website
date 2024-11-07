import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskradiusComponent } from './taskradius.component';

describe('TaskradiusComponent', () => {
  let component: TaskradiusComponent;
  let fixture: ComponentFixture<TaskradiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskradiusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskradiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
