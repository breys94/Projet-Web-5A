import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRepriseByMonitorComponent } from './show-reprise-by-monitor.component';

describe('ShowRepriseByMonitorComponent', () => {
  let component: ShowRepriseByMonitorComponent;
  let fixture: ComponentFixture<ShowRepriseByMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRepriseByMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRepriseByMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
