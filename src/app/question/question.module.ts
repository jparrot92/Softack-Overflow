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
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionFormComponent } from './question-form/question-form.component';

// Modul answer
import { AnswerModule } from '@app/answer/answer.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionRoutingModule,
    FormsModule,
    MomentModule,
    AnswerModule
  ],
  declarations: [
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent
  ]
})
export class QuestionModule { }
