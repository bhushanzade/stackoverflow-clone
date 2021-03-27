import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTaggedSearchComponent } from './questions-tagged-search.component';

describe('QuestionsTaggedSearchComponent', () => {
  let component: QuestionsTaggedSearchComponent;
  let fixture: ComponentFixture<QuestionsTaggedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsTaggedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsTaggedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
