import { Router } from 'express';
import { QuestionController } from '../controllers';

import * as auth from '../middlewares/auth.middleware';

const router: Router = Router();

router.get('/', QuestionController.getQuestions);

router.get('/:id', QuestionController.getQuestionById);

router.post('/', auth.isAuthenticated, QuestionController.addQuestion);

router.post('/:id/answers', auth.isAuthenticated, QuestionController.addAnswers);

export default router;
