import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParticipateComponent } from './show-participate.component';

describe('ShowParticipateComponent', () => {
  let component: ShowParticipateComponent;
  let fixture: ComponentFixture<ShowParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
