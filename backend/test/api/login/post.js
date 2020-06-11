process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

const { connect, close } = require('../../../db/index');
const app = require('../../../routes/login');
const users = require('../../../routes/users');

describe('POST /login', () => {
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

  it('Find user in db', (done) => {
    request(users)
      .post('/add')
      .send({
        firstName: 'USER FIRST',
        lastName: 'USER LAST',
        email: 'USER@EMAIL.com',
        adress: 'USER ADRESS',
        coAdress: '',
        password: 'PASSWORD',
        postalNumber: '12345',
        postalAdress: 'USER TOWN',
      })
      .expect(200)
      .then((res) => {
        console.log(`Post OK = ${res.ok}`);
      })
      .then(() => {
        request(app)
          .post('/authLogin')
          .send({
            email: 'USER@EMAIL.com',
            password: 'PASSWORD',
          })
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
