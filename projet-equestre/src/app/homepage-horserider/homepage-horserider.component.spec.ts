import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHorseriderComponent } from './homepage-horserider.component';

describe('HomepageHorseriderComponent', () => {
  let component: HomepageHorseriderComponent;
  let fixture: ComponentFixture<HomepageHorseriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageHorseriderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageHorseriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
