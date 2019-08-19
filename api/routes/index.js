import { Router } from 'express';
import descriptionRouter from './validation';


const router = Router();

router.use('/tasks', descriptionRouter);

export default router;
