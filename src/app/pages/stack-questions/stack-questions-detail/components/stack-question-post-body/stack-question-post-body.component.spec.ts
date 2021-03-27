import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackQuestionPostBodyComponent } from './stack-question-post-body.component';

describe('StackQuestionPostBodyComponent', () => {
  let component: StackQuestionPostBodyComponent;
  let fixture: ComponentFixture<StackQuestionPostBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackQuestionPostBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackQuestionPostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
