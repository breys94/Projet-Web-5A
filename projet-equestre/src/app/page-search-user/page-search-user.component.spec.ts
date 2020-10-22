import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchUserComponent } from './page-search-user.component';

describe('PageSearchUserComponent', () => {
  let component: PageSearchUserComponent;
  let fixture: ComponentFixture<PageSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
