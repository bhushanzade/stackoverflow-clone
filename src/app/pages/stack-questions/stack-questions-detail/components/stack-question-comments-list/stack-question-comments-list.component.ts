import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-question-comments-list',
  templateUrl: './stack-question-comments-list.component.html',
  styleUrls: ['./stack-question-comments-list.component.css']
})
export class StackQuestionCommentsListComponent implements OnInit {

  @Input() comments: Comment[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
