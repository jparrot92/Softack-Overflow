import { Question } from '@app/question/question';
import { User } from '@app/auth/user';

export class Answer {
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User
  ) { }
}
