import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { GlobalModule } from 'src/app/global/global.module';
import { AllSearchListComponent } from './all-search-list/all-search-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:
    {
      title: 'Home | Stackoverflow',
      active: 'home',
    },
  },
  {
    path: 'search',
    component: AllSearchListComponent,
    data:
    {
      title: 'Search Question| Stackoverflow',
      active: 'questions',
    },
  },
]

@NgModule({
  declarations: [HomeComponent, AllSearchListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    TagInputModule,
    FormsModule,
    PipesModule,
    GlobalModule,
    NgxPaginationModule,
  ],
})
export class HomeModule {
}
