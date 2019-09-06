import { NextFunction, Request, Response } from 'express';
import { secret } from '../config/config';
import jwt from 'jsonwebtoken';
import moment from 'moment';

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

export async function isAuthenticated(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
  try {

    if (!req.headers.authorization) {
      return res.status(401).json({
        error: {
          status: 403,
          message: 'La petición no tiene la cabecera de autenticación'
        }
      });
    }

    const token = req.headers.authorization.toString().replace('Bearer ', '');

    const tokenExp = jwt.decode(token, secret).exp;

    if (tokenExp <= moment().unix()) {
      return res.status(401).json({
        error: {
          status: 401,
          message: 'El token ha expirado'
        }
      });
    }

    const user: object | string = jwt.verify(token, secret);

    req.user = user;

    return next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({
      error: {
        status: 404,
        message: 'El token no es válido'
      }
    });
  }
}
