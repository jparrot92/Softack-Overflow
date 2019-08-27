import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../answer';
import { Question } from '@app/question/question';
import { QuestionService } from '@app/question/question.services';
import SweetScroll from 'sweet-scroll';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  providers: [QuestionService]
})

export class AnswerFormComponent {
  @Input() question: Question;
  sweetScroll: SweetScroll;

  constructor(private questionService: QuestionService) {
    this.sweetScroll = new SweetScroll();
  }

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question
    );

    this.questionService.addAnswer(answer).subscribe(
      a => {
        this.question.answers.unshift(a);
        this.sweetScroll.to('#title');
      },
      err => {
        console.error(err);
      }
    );
    form.reset();
  }
}
