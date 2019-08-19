import moment from 'moment';
import uuid from 'uuid';
import Task from '../db/task';


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
       req the req body
       * @param {
           object
       }
       res the res body
       * @returns {object} data
       * @memberof Description
       */
  static async withValidation(req, res) {
    if (!req.body.type
      && !req.body.crux
      && !req.body.color
      && !req.body.title) {
      return res.status(400).json({
        success: 'false',
        status: 400,
        message: 'All fields are required',
      });
    }
    if (!req.body.type) {
      return res.status(400).send({
        success: 'false',
        message: 'firstName is required'
      });
    } if (!req.body.crux) {
      return res.status(400).send({
        success: 'false',
        message: 'lastName is required'
      });
    } if (!req.body.color) {
      return res.status(400).send({
        success: 'false',
        message: 'email is required'
      });
    } if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'The type of Account is required'
      });
    }
    const Tasks = {
      id: uuid.v4(),
      type: req.body.type,
      crux: req.body.crux,
      color: req.body.color,
      title: req.body.title,
      createdDate: moment.now(),
      modifiedDate: moment.now()
    };
    return res.status(201).send({
      status: 201,
      success: 'true',
      message: 'Task created successfully',
      Tasks
    });
  }

  /**
       * @description Create Ideas
       * @param {
           object
       }
       req the req body
       * @param {
        object
      }
      res the res body
      * @returns {object} data
      * @memberof Description
      */
  static async withoutValidation(req, res) {
    if (req.body.type !== 'type') {
      return res.status(400).send({
        success: 'false',
        message: '‘attribute not found'
      });
    }
    Task.forEach((v) => {
      delete v.type;
      return res.status(201).send({
        status: 201,
        success: 'true',
        message: 'Task created successfully',
        Task
      });
    });
  }
}

export default Description;
