process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

const { connect, close } = require('../../../db/index');
const app = require('../../../routes/users');

describe('POST /users', () => {
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

  it('Create new user', (done) => {
    request(app)
      .post('/add')
      .send({
        firstName: 'USER FIRST',
        lastName: 'USER LAST',
        email: 'USER@EMAIL.com',
      })
      .then(() => {
        request(app)
          .get('/')
          .then((res) => {
            console.log('res.body.length = ', res.body.length);
            expect(res.body.length).to.equal(1);
            done();
          });
      })
      .catch((err) => done(err));
  });
});
