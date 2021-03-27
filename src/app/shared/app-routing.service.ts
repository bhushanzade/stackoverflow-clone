import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RoutesRecognized,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class RouteChangeService {
  data: any;
  subs: Array<Subscription> = [];
  constructor(
    private router: Router,
    private sharedService: AppService,
    private titleService: Title,
    public route: ActivatedRoute,
  ) {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
      }

      if (e instanceof NavigationEnd) {
      }

      if (e instanceof NavigationCancel) {
      }

      if (e instanceof NavigationError) {
      }

      if (e instanceof RoutesRecognized) {
        this.subs[0] = this.router.events
          .pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.route.snapshot),
            map(route => {
              while (route.firstChild) {
                route = route.firstChild;
              }
              return route;
            })
          )
          .subscribe((route: ActivatedRouteSnapshot) => {
            this.data = route.data;
            if (this.data['active']) {
              this.sharedService.activeTemplate = this.data['active'];
            }

            if (this.data['title']) {
              var title = this.data['title'];
              this.titleService.setTitle(title);
            }
          });
      }
    });
  }
}
