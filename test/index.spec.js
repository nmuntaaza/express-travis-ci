const expect = require('chai').expect;
const request = require('supertest');
const server = require('../index');

describe('test', () => {
  it('Should return a string', done => {
    request(server).get('/').expect('Ci with Travis', done);
  });
});