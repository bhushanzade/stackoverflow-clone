import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StackExchnageService } from './shared/stack-exchnage.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AppService } from './shared/app.service';
import { RouteChangeService } from './shared/app-routing.service';
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GlobalModule
  ],
  providers: [
    StackExchnageService,
    AppService,
    RouteChangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private sharedService: AppService,
    private routeChange: RouteChangeService
  ) { }
}
