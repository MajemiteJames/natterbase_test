import express from 'express';
import Description from '../controller/task';

const descriptionRouter = express.Router();

descriptionRouter.post('/', Description.withValidation);
descriptionRouter.get('/2', Description.withoutValidation);


export default descriptionRouter;
