import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing question
import { QuestionRoutingModule } from './question-routing.modules';

// Translation
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

// Material Angular
import {
  MatCardModule,
} from '@angular/material';

const materialmModules = [
  MatCardModule
];

// Angular Moment
import { MomentModule } from 'ngx-moment';

// Components question
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    TranslateModule,
    HttpClientModule,
    materialmModules,
    MomentModule
  ],
  declarations: [QuestionDetailComponent]
})
export class QuestionModule { }
