import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./pages/stack-questions/stack-questions.module').then(m => m.StackQuestionsModule)
      },
    ])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() { }

}
