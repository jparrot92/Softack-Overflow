import express from 'express';
import AuthRouter from './auth.router';
import QuestionRouter from './question.router';

export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  app.use('/v1/auth', AuthRouter);

  app.use('/v1/questions', QuestionRouter);

  app.use(router);
}
