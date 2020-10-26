import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageMonitorComponent } from './homepage-monitor.component';

describe('HomepageMonitorComponent', () => {
  let component: HomepageMonitorComponent;
  let fixture: ComponentFixture<HomepageMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
