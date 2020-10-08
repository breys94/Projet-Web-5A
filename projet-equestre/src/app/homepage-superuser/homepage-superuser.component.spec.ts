import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSuperuserComponent } from './homepage-superuser.component';

describe('HomepageSuperuserComponent', () => {
  let component: HomepageSuperuserComponent;
  let fixture: ComponentFixture<HomepageSuperuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSuperuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSuperuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
