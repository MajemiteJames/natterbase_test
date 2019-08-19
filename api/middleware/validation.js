import { check } from 'express-validator/check';
import displayErrors from './displayError';

const Validation = [
  check('type').not().isEmpty().withMessage('type cannot be empty'),
  check('type').isAlpha().trim().withMessage('type can only contain letters'),
  check('crux').not().isEmpty().withMessage('crux cannot be empty'),
  check('crux').isAlpha().trim().withMessage('crux can only contain letters'),
  check('color').not().isEmpty().withMessage('color cannot be empty'),
  check('color').isAlpha().trim().withMessage('color can only contain letters'),
  check('title').not().isEmpty().withMessage('title cannot be empty'),
  check('title').isAlpha().trim().withMessage('title can only contain letters'),
  displayErrors,
];

export default Validation;
