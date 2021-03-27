import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackQuestionsDetailComponent } from './stack-questions-detail.component';

describe('StackQuestionsDetailComponent', () => {
  let component: StackQuestionsDetailComponent;
  let fixture: ComponentFixture<StackQuestionsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackQuestionsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackQuestionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
