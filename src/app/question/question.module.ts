import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Share module
import { SharedModule } from '@app/shared/shared.module';

// Routing question
import { QuestionRoutingModule } from './question-routing.modules';

// Angular Moment
import { MomentModule } from 'ngx-moment';

// Components question
import { QuestionDetailComponent } from './question-detail/question-detail.component';

// Modul answer
import { AnswerModule } from '@app/answer/answer.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionRoutingModule,
    MomentModule,
    AnswerModule
  ],
  declarations: [QuestionDetailComponent]
})
export class QuestionModule { }
