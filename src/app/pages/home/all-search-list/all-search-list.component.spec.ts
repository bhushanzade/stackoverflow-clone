import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSearchListComponent } from './all-search-list.component';

describe('AllSearchListComponent', () => {
  let component: AllSearchListComponent;
  let fixture: ComponentFixture<AllSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
