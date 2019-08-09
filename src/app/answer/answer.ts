import { Question } from '../question/question';

export class User {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}

export class Answer {
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User
  ) { }
}
