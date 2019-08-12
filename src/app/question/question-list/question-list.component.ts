import { Component } from '@angular/core';
import { Question } from '../question';

const q = new Question(
  '¿Como empezar con AWS?',
  'Pregunta',
  new Date(),
  'devicon-vim-plain');

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);

}
