import { NextFunction, Request, Response } from 'express';
import { secret } from '../config/config';
import jwt from 'jsonwebtoken';

export const users = [
  {
    firstName: 'David',
    lastName: 'Castillo',
    email: 'davecas26@gmail.com',
    password: '123456',
    id: 123
  }
];

export const findUserByEmail = e => users.find(({ email }) => email === e);

export interface RequestWithUser extends Request {
  user: object | string;
}

export function isAuthenticated(req: RequestWithUser, res: Response, next: NextFunction): void {
  jwt.verify(req.query.token, secret, (err, token) => {
    if (err) {
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      });
    }

    req.user = token.user;
    next();
  });
}
