import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StackExchnageService } from 'src/app/shared/stack-exchnage.service';
import { StackQuestionsList } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tab = 'interesting';
  allQuestions: StackQuestionsList[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StackExchnageService
  ) {
    // this.router.navigate(['/'], { queryParams: { tab: this.tab } });
  }

  ngOnInit(): void {
    this.searchData();
  }

  searchData() {
    const params = {
      tab: this.tab
    }
    this.service.getAllSearchDataForHome(params).subscribe((res: any) => {
      this.allQuestions = res.items;
    });
  }

  onChangeTab(tab) {
    this.tab = tab;
    // this.router.navigate(['/'], { queryParams: { tab: this.tab } });
    this.searchData();
  }
}
