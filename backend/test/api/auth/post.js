process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

const { connect, close } = require('../../../index');
const app = require('../../../routes/auth.routes');
const users = require('../../../routes/users.routes');

const userTemplate = {
  firstName: 'USER FIRST',
  lastName: 'USER LAST',
  email: 'USER@EMAIL.com',
  adress: 'USER ADRESS',
  coAdress: '',
  password: 'PASSWORD',
  postalNumber: 12345,
  postalAdress: 'USER TOWN',
};

describe('POST /auth/signup', () => {
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
      .post('/signup')
      .send(userTemplate)
      .expect(201) // Created
      .then((res) => {
        console.log(`User registered = ${res.status}`);
      })
      .then(() => {
        request(users)
          .get('/')
          .then((res) => {
            console.log('res.body.length = ', res.body.length);
            expect(res.body.length).to.equal(1);
            done();
          })
          .catch((err) => done(err));
      })
      .catch((err) => done(err));
  });
});
