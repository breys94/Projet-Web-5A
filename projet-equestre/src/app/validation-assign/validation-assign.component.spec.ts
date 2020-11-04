import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationAssignComponent } from './validation-assign.component';

describe('ValidationAssignComponent', () => {
  let component: ValidationAssignComponent;
  let fixture: ComponentFixture<ValidationAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
