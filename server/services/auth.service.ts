const users = [
  {
    firstName: 'David',
    lastName: 'Castillo',
    email: 'davecas26@gmail.com',
    password: '123456',
    id: 123
  }
];

export const findUserByEmail = e => users.find(({ email }) => email === e);

export function createUser(params) {
  const { firstName, lastName, email, password } = params.body;
  const user = {
    id: +new Date(),
    firstName,
    lastName,
    email,
    password
  };

  users.push(user);

  return user;

}

