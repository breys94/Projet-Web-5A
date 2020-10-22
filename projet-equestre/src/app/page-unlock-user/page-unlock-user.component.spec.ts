import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnlockUserComponent } from './page-unlock-user.component';

describe('PageUnlockUserComponent', () => {
  let component: PageUnlockUserComponent;
  let fixture: ComponentFixture<PageUnlockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUnlockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
