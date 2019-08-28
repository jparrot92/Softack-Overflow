import { Router } from 'express';
import { AuthController } from '../controllers';

const router: Router = Router();

router.post('/signin', AuthController.signin);

export default router;
