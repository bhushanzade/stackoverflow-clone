import { Component, Input, OnInit } from '@angular/core';
import { StackQuestionDetail } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-stack-question-post-body',
  templateUrl: './stack-question-post-body.component.html',
  styleUrls: ['./stack-question-post-body.component.css']
})
export class StackQuestionPostBodyComponent implements OnInit {

  @Input() model : StackQuestionDetail;

  constructor() { 
    this.model = new StackQuestionDetail();
  }

  ngOnInit(): void {
  }

}
