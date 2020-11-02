import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepriseComponent } from './show-reprise.component';

describe('ShowRepriseComponent', () => {
  let component: ShowRepriseComponent;
  let fixture: ComponentFixture<ShowRepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
