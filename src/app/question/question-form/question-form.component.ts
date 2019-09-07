import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../question';
import icons from './icons';
import { QuestionService } from '../question.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
  providers: [QuestionService]
})

export class QuestionFormComponent {

  icons: Object[] = icons;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  getIconVersion(icon: any) {
    let version = '';

    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }

    return version;
  }

  onSubmit(form: NgForm) {
    const q = {
      title: form.value.title,
      description: form.value.description,
      createdAt: new Date(),
      icon: form.value.icon
    };

    this.questionService.addQuestion(q).subscribe(
      question => {
        this.router.navigate(['/questions', question.id]);
      },
      err => {
        console.error(err);
      }
    );

    form.resetForm();
  }
}
