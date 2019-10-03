import { Answer } from './answer';

export interface Question {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers?: Answer[];
}
