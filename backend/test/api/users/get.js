process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');
const { after, describe, before, it } = require('mocha');

// const app = require('../../../routes/user');
const server = require('../../../server');

describe('GET /user', () => {
  before((done) => {
    server
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    server
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });
  it('OK, getting users has no users', (done) => {
    request(server.app)
      .get('/user')
      .then((res) => {
        console.log(res.body);
        expect(res.body.length).to.equal(0);
        done();
      })
      .catch((err) => done(err));
  });
});
