import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StackExchnageService } from 'src/app/shared/stack-exchnage.service';
import { StackQuetions } from 'src/app/shared/stack-questions.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  popover: boolean = false;
  searchModel: string = '';
  itags = [];
  search = '';
  paramsModel: StackQuetions;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StackExchnageService
  ) {
    this.paramsModel = new StackQuetions();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param: StackQuetions) => {
      this.paramsModel = param;
    });

    this.service.searchQuestion$.subscribe(res => {
      if (!this.searchModel) {
        if (res.tags) {
          res.tags.forEach(tag => {
            this.searchModel += '[' + tag + ']';
          });
        }
      }
    })
  }

  setInputSearch($event): void {
    const rstr = this.searchModel.trim().replace(/\[.*?\]/g, '').trim();
    if (rstr) {
      if (rstr.split(" ").length - 1 == 0) {
        this.searchModel = this.searchModel.replace(rstr, '[' + rstr + ']');
      } else {
        this.search = rstr;
      }
      const matches = this.searchModel.trim().match(/[^[\]]+(?=])/g);
      if (matches) {
        this.itags = matches;
      }
    }
  }

  goToSearch(): void {
    if (this.search && this.itags.length > 0 || this.search && this.itags.length === 0) {
      const params = {
        page: this.paramsModel.page ? this.paramsModel.page : 1,
        pagesize: this.paramsModel.pagesize ? this.paramsModel.pagesize : 15,
        q: this.search,
        tagged: this.itags.length > 0 ? this.itags.join(';') : ''
      }
      this.router.navigate(['/search'], { queryParams: params })
    } else if (!this.search && this.itags.length > 0) {
      this.router.navigate(['/questions/tagged', this.itags.join('+')]);
    }
  }

}
