import { Router } from 'express';
import { registerUserSchema } from '../validation/auth';
import { registerUserController } from '../controllers/auth';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
export default router;
