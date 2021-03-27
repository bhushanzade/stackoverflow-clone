import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackQuestionCommentsListComponent } from './stack-question-comments-list.component';

describe('StackQuestionCommentsListComponent', () => {
  let component: StackQuestionCommentsListComponent;
  let fixture: ComponentFixture<StackQuestionCommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackQuestionCommentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackQuestionCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
