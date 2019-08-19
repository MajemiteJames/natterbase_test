import express from 'express';
import Description from '../controller/task';

const descriptionRouter = express.Router();

descriptionRouter.post('/', Description.withValidation);
descriptionRouter.get('/removeItem', Description.withoutValidation);


export default descriptionRouter;
