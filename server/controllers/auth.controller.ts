import { Request, Response } from 'express';

export const users = [
  {
    firstName: 'David',
    lastName: 'Castillo',
    email: 'davecas26@gmail.com',
    password: '123456',
    _id: 123
  }
];

export const findUserByEmail = e => users.find(({ email }) => email === e);

function comparePasswords(providedPassword, userPassword) {
  return providedPassword === userPassword;
}

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

  } catch (e) {
    console.log(e);
  }
}


