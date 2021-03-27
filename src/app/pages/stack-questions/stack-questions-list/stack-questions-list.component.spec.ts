import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackQuestionsListComponent } from './stack-questions-list.component';

describe('StackQuestionsListComponent', () => {
  let component: StackQuestionsListComponent;
  let fixture: ComponentFixture<StackQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackQuestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
