import { Request, Response } from 'express';
import { RequestWithUser } from '../middlewares/auth.middleware';
import { QuestionService } from '../services';

export async function getQuestions(req: Request, res: Response): Promise<Response | void> {
  try {

    const questions = QuestionService.getAllQuestions();

    res.status(200).json(questions);
  } catch (e) {
    console.log(e);
  }
}

export async function getQuestionById(req: Request, res: Response): Promise<Response | void> {
  try {
    const { id } = req.params;

    const question = QuestionService.getQuestionById(id);

    res.status(200).json(question);
  } catch (e) {
    console.log(e);
  }
}

export async function addQuestion(req: RequestWithUser, res: Response): Promise<Response | void> {
  try {

    const question = QuestionService.createQuestion(req);

    res.status(201).json(question);
  } catch (e) {
    console.log(e);
  }
}

export async function addAnswers(req: RequestWithUser, res: Response): Promise<Response | void> {
  try {
    const answer = QuestionService.createAnswers(req);

    res.status(201).json(answer);
  } catch (e) {
    console.log(e);
  }
}

