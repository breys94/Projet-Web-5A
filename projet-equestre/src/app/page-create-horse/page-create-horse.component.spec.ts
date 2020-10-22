import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateHorseComponent } from './page-create-horse.component';

describe('PageCreateHorseComponent', () => {
  let component: PageCreateHorseComponent;
  let fixture: ComponentFixture<PageCreateHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateHorseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
