import { Router } from 'express';
import { QuestionController } from '../controllers';

const router: Router = Router();

router.get('/', QuestionController.getQuestions);

router.get('/:id', QuestionController.getQuestionById);

router.post('/', QuestionController.addQuestion);

export default router;
