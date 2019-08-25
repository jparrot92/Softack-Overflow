import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.services';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      questions => {
        this.questions = questions;
      },
      err => {
        console.error(err);
      },
      () => {
        this.loading = false;
      }
    );
  }

}
