import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCodeComponent } from './demande-code.component';

describe('DemandeCodeComponent', () => {
  let component: DemandeCodeComponent;
  let fixture: ComponentFixture<DemandeCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
