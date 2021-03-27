import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StackExchnageService } from 'src/app/shared/stack-exchnage.service';
import { StackQuestionsList, StackQuetions } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-stack-questions-list',
  templateUrl: './stack-questions-list.component.html',
  styleUrls: ['./stack-questions-list.component.css']
})
export class StackQuestionsListComponent implements OnInit, OnDestroy {

  paramsModel: StackQuetions;
  allItems: StackQuestionsList[];
  pageSize: number = 15;
  pageNo: number = 1;
  totalCnt: number = 0;
  search = '';
  tags = '';
  subscriptions: Subscription[] = [];
  x: Element[];
  tab = 'creation';
  searchedTags: string[] = [];
  taggedRoute: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StackExchnageService,
  ) {
    this.paramsModel = new StackQuetions();
    this.allItems = [];
    this.taggedRoute = this.router.url.includes('questions/tagged');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    if (this.taggedRoute) {
      this.getAllTags();
    } else {
      this.getAllParams();
    }
  }

  getAllTags() {
    this.route.params.subscribe(param => {
      this.searchedTags = param['tags'].split('+');
      this.service.stackSearchQuestion({ tags: this.searchedTags });
      const params: StackQuetions = {
        page: 1,
        pagesize: 15,
        q: '',
        tagged: this.searchedTags.join(';'),
      }
      this.paramsModel = params;
      this.getAllQuestions();
    });
  }

  getAllParams(): void {
    this.route.queryParams.subscribe((param: StackQuetions) => {
      this.paramsModel = param;
      this.getAllQuestions();
    })
  }

  getAllQuestions() {
    const params = {
      order: this.tab === 'creation' ? 'asc' : 'desc',
      sort: this.tab === 'votes' ? 'votes' : this.tab === 'activity' ? 'activity' : 'activity',
      accepted: 'True',
      ...this.paramsModel
    }
    let subscribe1 = this.service.getTotalCountOfQuestions(params).subscribe((res: any) => {
      this.totalCnt = res.total;
    });

    let subscribe2 = this.service.getAllQuestions(params).subscribe((res: any) => {
      this.allItems = res.items;
    });

    this.subscriptions.push(subscribe1);
    this.subscriptions.push(subscribe2);

  }

  pageChanged(event) {
    this.pageNo = event;
    const params: StackQuetions = {
      page: this.pageNo,
      pagesize: this.pageSize,
      q: '',
      tagged: ''
    }
    this.paramsModel = params;
    this.getAllQuestions();
  }

  pageSizeChanged(size) {
    this.pageSize = size;
    const params: StackQuetions = {
      page: 1,
      pagesize: this.pageSize,
      q: '',
      tagged: ''
    }
    this.paramsModel = params;
    this.getAllQuestions();
  }

  onChangeTab(tab) {
    this.tab = tab;
    const params: StackQuetions = {
      page: 1,
      pagesize: this.pageSize,
      q: '',
      tagged: ''
    }
    this.paramsModel = params;
    this.getAllQuestions();
  }
}