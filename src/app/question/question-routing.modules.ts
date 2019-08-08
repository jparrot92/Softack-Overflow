import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuestionDetailComponent } from '../question/question-detail/question-detail.component';

const routes = [
  { path: 'contact', component: QuestionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
