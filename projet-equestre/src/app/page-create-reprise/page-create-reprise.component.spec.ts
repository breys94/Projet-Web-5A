import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateRepriseComponent } from './page-create-reprise.component';

describe('PageCreateRepriseComponent', () => {
  let component: PageCreateRepriseComponent;
  let fixture: ComponentFixture<PageCreateRepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateRepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateRepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
