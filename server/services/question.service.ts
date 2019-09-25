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

export function getAllQuestions() {
  return questions;
}

export function getQuestionById(id) {
  const question = questions.find((q) => q.id === +id);
  return question;
}

export function createQuestion(params) {

  const question = params.body;
  question.id = +new Date();
  question.user = params.user;
  question.createdAt = new Date();
  question.answers = [];
  questions.push(question);
  return question;
}

export function createAnswers(params) {
  const answer = params.body;

  const { id } = params.body.question;

  const question = questions.find((q) => q.id === +id);

  answer.createdAt = new Date();
  answer.user = params.user;

  question.answers.push(answer);

  return answer;
}
