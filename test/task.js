import chai from 'chai';
import chaiHttp from 'chai-http';
import uuid from 'uuid';
import app from '../api/app';


chai.use(chaiHttp);
const { expect } = chai;

describe('Savings list Intergration Test', () => {
  const tasks = {
    id: uuid.v4(),
    type: 'durban',
    crux: 'Indices',
    color: 'green',
    title: 'Indict the idiot',
  };
  it('create task successfully', (done) => {
    chai.request(app)
      .post('/api/v1/tasks')
      .send(tasks)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(201);
        done();
        console.log(res.body);
      });
    // chai
    //   .request(app)
    //   .post('/api/v1/tasks')
    //   .send(tasks)
    //   .end((err, response) => {
    //     expect(response).to.have.status(201);
    //     expect(result).to.equal('promise resolved');
    //     console.log(response.body);
    //     done(err);
    //   });
  });
});
