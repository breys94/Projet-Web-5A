import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchRepriseComponent } from './page-search-reprise.component';

describe('PageSearchRepriseComponent', () => {
  let component: PageSearchRepriseComponent;
  let fixture: ComponentFixture<PageSearchRepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSearchRepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchRepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
