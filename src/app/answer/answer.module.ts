import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Share module
import { SharedModule } from '@app/shared/shared.module';

// Form module
import { FormsModule } from '@angular/forms';

// Components question
import { AnswerFormComponent } from './answer-form/answer-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [AnswerFormComponent],
  exports: [AnswerFormComponent]
})
export class AnswerModule { }
