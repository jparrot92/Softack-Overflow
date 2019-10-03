import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question/question-detail/question-detail.component';
import { QuestionFormComponent } from './components/question/question-form/question-form.component';

const routes = [
  { path: 'questions', component: QuestionListComponent },
  {
    path: 'questions', children: [
      { path: 'new', component: QuestionFormComponent},
      { path: ':id', component: QuestionDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
