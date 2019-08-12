import { Answer } from '../answer/answer';

export class Question {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers: Answer[];

  constructor(
      title: string,
      description: string,
      createdAt?: Date,
      icon?: string
      ) {
          this.id = '1';
          this.title = title;
          this.description = description;
          this.createdAt = createdAt;
          this.icon = icon;
          this.answers = [];
  }
}
