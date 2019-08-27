import { Request, Response } from 'express';
import { RequestWithUser } from '../middlewares/auth.middleware';

const questionTest = {
  id: 1,
  title: '¿Cómo reutilizo un componente en Android?',
  description: 'Miren esta es mi pregunta',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'David',
    lastName: 'Castillo',
    email: 'davecas26@gmail.com',
    password: '123456'
  }
};

const questions = new Array(10).fill(questionTest);

export async function getQuestions(req: Request, res: Response): Promise<Response | void> {
  try {
    res.status(200).json(questions);
  } catch (e) {
    console.log(e);
  }
}

export async function getQuestionById(req: Request, res: Response): Promise<Response | void> {
  try {
    const { id } = req.params;

    const question = questions.find((q) => q.id === +id);

    res.status(200).json(question);
  } catch (e) {
    console.log(e);
  }
}

export async function addQuestion(req: RequestWithUser, res: Response): Promise<Response | void> {
  try {
    const question = req.body;
    question.id = +new Date();
    question.user = req.user;
    question.createdAt = new Date();
    question.answers = [];
    questions.push(question);
    res.status(201).json(question);
  } catch (e) {
    console.log(e);
  }
}

export async function addAnswers(req: RequestWithUser, res: Response): Promise<Response | void> {
  try {
    const answer = req.body;

    const { id } = req.params;
    const question = questions.find((q) => q.id === +id);

    answer.createdAt = new Date();
    answer.user = req.user;

    question.answers.push(answer);
    res.status(201).json(answer);
  } catch (e) {
    console.log(e);
  }
}

