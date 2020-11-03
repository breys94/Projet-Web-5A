import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepriseAssignComponent } from './show-reprise-assign.component';

describe('ShowRepriseAssignComponent', () => {
  let component: ShowRepriseAssignComponent;
  let fixture: ComponentFixture<ShowRepriseAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRepriseAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRepriseAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
