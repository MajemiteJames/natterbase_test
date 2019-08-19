import moment from 'moment';
import uuid from 'uuid';


/**
 * @description This class handles user requests
 * @class Description
 */
class Description {
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
       * @returns {object} data
       * @memberof Description
       */
  static async withValidation(request, response) {
    try {
      return response.status(201).json({
        status: 'success',
        data: {
          id: uuid.v4(),
          type: request.body.type,
          crux: request.body.crux,
          color: request.body.color,
          title: request.body.title,
          createdDate: moment.now(),
          modifiedDate: moment.now()
        },
      });
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        error: error.message,
      });
    }
  }
}

export default Description;
