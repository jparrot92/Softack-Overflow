import { Component } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'Esta es una nueva pregunta sobre Android',
    'Mire, tengo una duda con una aplicación que estoy haciendo para Android',
    new Date(),
    'devicon-android-plain'
  );

}
