import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackQuestionsListComponent } from './stack-questions-list/stack-questions-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StackQuestionsDetailComponent } from './stack-questions-detail/stack-questions-detail.component';
import { GlobalModule } from 'src/app/global/global.module';
import { StackQuestionPostBodyComponent } from './stack-questions-detail/components/stack-question-post-body/stack-question-post-body.component';
import { StackQuestionCommentsListComponent } from './stack-questions-detail/components/stack-question-comments-list/stack-question-comments-list.component';
import { QuestionsTaggedSearchComponent } from './questions-tagged-search/questions-tagged-search.component';

const route: Routes = [
  {
    path: '',
    component: StackQuestionsListComponent,
    data:
    {
      title: 'Questions | Stackoverflow',
      active: 'questions',
    },
  },
  {
    path: ':qid',
    component: StackQuestionsDetailComponent,
    data:
    {
      title: 'Questions | Stackoverflow',
      active: 'questions',
    },
  },
  {
    path: 'tagged/:tags',
    component: StackQuestionsListComponent,
    data:
    {
      title: 'Tags Questions | Stackoverflow',
      active: 'questions',
    },
  },
]

@NgModule({
  declarations: [
    StackQuestionsListComponent,
    StackQuestionsDetailComponent,
    StackQuestionPostBodyComponent,
    StackQuestionCommentsListComponent,
    QuestionsTaggedSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    TagInputModule,
    FormsModule,
    PipesModule,
    NgxPaginationModule,
    GlobalModule
  ],
  providers: [
  ]
})
export class StackQuestionsModule { }
