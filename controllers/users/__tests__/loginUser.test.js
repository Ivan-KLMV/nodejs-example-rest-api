/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../../../server');

describe('POST /login', () => {
  it('should return status code, user object and jwt', async () => {
    const testData = {
      email: 'john@mail.com',
      password: '123456',
    };

    const res = await request(app).post('/api/users/login').send(testData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
        user: expect.objectContaining({
          email: expect.any(String),
          subscription: expect.any(String),
        }),
      })
    );
  });
});
