import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StackExchnageService } from 'src/app/shared/stack-exchnage.service';
import { StackQuestionDetail } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-stack-questions-detail',
  templateUrl: './stack-questions-detail.component.html',
  styleUrls: ['./stack-questions-detail.component.css']
})
export class StackQuestionsDetailComponent implements OnInit {
  model: StackQuestionDetail;
  questionId: string = '';
  answers: StackQuestionDetail[] = [];
  ans_sort = 'activity';
  constructor(
    private route: ActivatedRoute,
    private service: StackExchnageService,
    private titleService: Title,
  ) {
    this.model = new StackQuestionDetail();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.questionId = param['qid'];
      if (this.questionId) {
        this.getQuestionDetails();
      }
    })
  }

  getQuestionDetails() {

    const params = {
      order: 'desc',
      sort: 'activity',
      site: 'stackoverflow',
      filter: '!0Vdjg_vqDf9o64tjps)60Ln.B'
    }

    this.service.getQuestionDetailByID(this.questionId, params).subscribe((res: any) => {
      this.model = res.items[0];
      this.titleService.setTitle(this.model.title);
      this.getAnswersListByQuestion();
    });
  }

  getAnswersListByQuestion() {
    const params = {
      order: 'desc',
      sort: this.ans_sort,
      site: 'stackoverflow',
      filter: '!)5TZ1K-2NKEyKoa4(aGDSvQaDgfN'
    }

    this.service.getAnswersByQuestion(this.questionId, params).subscribe((res: any) => {
      this.answers = res.items;
    });
  }

  onChangeSortFilter(sort) {
    this.ans_sort = sort;
    this.getAnswersListByQuestion();
  }

}
