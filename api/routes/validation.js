import express from 'express';
import Description from '../controller/task';
import Validation from '../middleware/validation';

const descriptionRouter = express.Router();

descriptionRouter.post('/', Validation, Description.withValidation);
descriptionRouter.post('/2', Description.withValidation);


export default descriptionRouter;
