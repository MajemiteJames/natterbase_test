import { validationResult } from 'express-validator/check';


/**
   * @description Create Ideas
   * @param {
       object
   }
   request the request body
   * @param {
       object
   }
   response the response body
   * @returns {object} Idea
   * @memberof validation of Task
   */
const displayErrors = (request, response) => {
  const messages = [];
  const error = validationResult(request);
  if (!error.isEmpty()) {
    error.array().forEach((err) => {
      messages.push(err.msg);
    });

    return response.status(400).json({
      status: 400,
      error: messages,
    });
  }
};

export default displayErrors;
