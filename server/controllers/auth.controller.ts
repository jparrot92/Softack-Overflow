import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../config/config';
import { users, findUserByEmail } from '../middlewares/auth.middleware';

function comparePasswords(providedPassword, userPassword) {
  return providedPassword === userPassword;
}

const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 });

export async function signin(req: Request, res: Response): Promise<Response | void> {
  try {
    const { email, password } = req.body;
    const user = findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        error: {
          status: 401,
          message: `User with email ${email} not found`
        }
      });
    }

    if (!comparePasswords(password, user.password)) {
      return res.status(401).json({
        error: {
          status: 401,
          message: 'Email and password don\'t match'
        }
      });
    }

    // 86400 Segundos = 1 Días
    const token = jwt.sign({ user }, secret, { expiresIn: 86400 });
    res.status(200).json({
      message: 'Login succede',
      token,
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });

  } catch (e) {
    console.log(e);
  }
}

export async function signup(req: Request, res: Response): Promise<Response | void> {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = {
      id: +new Date(),
      firstName,
      lastName,
      email,
      password
    };

    users.push(user);

    const token = createToken(user);
    res.status(201).json({
      message: 'User saved',
      token,
      userId: user.id,
      firstName,
      lastName,
      email
    });
  } catch (e) {
    console.log(e);
  }
}
