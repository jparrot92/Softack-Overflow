import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Share module
import { SharedModule } from '@app/shared/shared.module';

// Routing question
import { QuestionRoutingModule } from './question-routing.modules';

// Form module
import { FormsModule } from '@angular/forms';

// Angular Moment
import { MomentModule } from 'ngx-moment';

// Components question
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question/question-detail/question-detail.component';
import { QuestionFormComponent } from './components/question/question-form/question-form.component';
import { AnswerFormComponent } from './components/answer/answer-form/answer-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionRoutingModule,
    FormsModule,
    MomentModule
  ],
  declarations: [
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent,
    AnswerFormComponent
  ]
})
export class QuestionModule { }
