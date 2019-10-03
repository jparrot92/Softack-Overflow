import { Question } from '@app/question/models/question';
import { User } from '@app/auth/user';

export interface Answer {
  description: string;
  question: Question;
  createdAt?: Date;
  user?: User;
}
