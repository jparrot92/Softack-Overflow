import { NextFunction, Request, Response } from 'express';

const currentUser = {
  firstName: 'Jaume',
  lastName: 'Parrot',
  email: 'jparrot2@gmail.com',
  password: '123456'
};

export interface RequestWithUser extends Request {
  user: object | string;
}

export function isAuthenticated(req: RequestWithUser, res: Response, next: NextFunction): void {
  req.user = currentUser;
  next();
}
