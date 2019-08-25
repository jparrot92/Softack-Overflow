import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit {
  question?: Question;
  loading = true;

  constructor(
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.questionService.getQuestion(id).subscribe(
          question => {
            this.question = question;
          },
          err => {
            console.error(err);
          },
          () => {
            this.loading = false;
          }
        );
      }
    });
  }

}
