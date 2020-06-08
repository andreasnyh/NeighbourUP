process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

const { connect, close } = require('../../../db/index');
const app = require('../../../routes/users');

describe('GET /users', () => {
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
        console.log('res.body.length = ', res.body.length);
        expect(res.body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });
});
