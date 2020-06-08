process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

const { connect, close } = require('../../../db/index');
const app = require('../../../routes/users');

describe('GET /user', () => {
  before((done) => {
    connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    close()
      .then(() => done())
      .catch((err) => done(err));
  });
  it('No users in database', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        console.log(res.body);
        expect(res.body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });
  /* it('Add one user and check if saved', (done) => {
    request(app)
      .post('/add')
      .send({
        firstName: 'USER FIRST',
        lastName: 'USER LAST',
        email: 'USER EMAIL',
      })
      .expect(200)
      .then(() => {
        request(app)
          .get('/')
          .then((res) => {
            console.log(res.body);
            expect(res.body.length).to.equal(1);
            done();
          });
      })
      .catch((err) => done(err));
  }); */
});
