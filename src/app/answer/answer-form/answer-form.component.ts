import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from '../answer';
import { Question } from '@app/question/question';
import { User } from '@app/auth/user';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})

export class AnswerFormComponent {
  @Input() question: Question;

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User('Albert', 'Cosme')
    );
    this.question.answers.unshift(answer);
    form.reset();
  }
}
