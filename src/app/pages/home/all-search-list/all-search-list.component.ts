import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StackExchnageService } from 'src/app/shared/stack-exchnage.service';
import { StackQuetions, StackQuestionsList } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-all-search-list',
  templateUrl: './all-search-list.component.html',
  styleUrls: ['./all-search-list.component.css']
})
export class AllSearchListComponent implements OnInit, OnDestroy {

  paramsModel: StackQuetions;
  allItems: StackQuestionsList[];
  pageSize: number = 15;
  pageNo: number = 1;
  totalCnt: number = 0;
  search = '';
  tags = '';
  subscriptions: Subscription[] = [];
  x: Element[];
  tab = 'relevance';
  searchedTags: string[] = [];
  advanceSearchTips: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StackExchnageService,
  ) {
    this.paramsModel = new StackQuetions();
    this.allItems = [];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    this.getAllParams();
  }

  getAllParams(): void {
    this.route.queryParams.subscribe((param: StackQuetions) => {
      this.paramsModel = param;
      if (this.paramsModel.tagged) {
        this.searchedTags = this.paramsModel.tagged.split(';');
        encodeURIComponent(this.paramsModel.tagged);
      }
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

    let subscribe1 = this.service.getTotalCountSearchData(params).subscribe((res: any) => {
      this.totalCnt = res.total;
    });

    let subscribe2 = this.service.getAllSearchData(params).subscribe((res: any) => {
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
