import request from 'supertest';
import { app } from '../app'; // Assuming you export your Express app from this module
import { User } from '../models/user';
import { Password } from '../../services/password';
import {describe, expect, it} from '@jest/globals'

jest.mock('../models/user');
jest.mock('../../services/password');

describe('POST /api/users/signin', () => {
  it('returns a 400 with an invalid email', async () => {
    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'notAnEmail',
        password: 'password'
      })
      .expect(400);
  });

  it('returns a 400 with missing email and password', async () => {
    await request(app)
      .post('/api/users/signin')
      .send({})
      .expect(400);

    await request(app)
      .post('/api/users/signin')
      .send({ email: 'test@test.com' })
      .expect(400);

    await request(app)
      .post('/api/users/signin')
      .send({ password: 'password' })
      .expect(400);
  });

  it('returns a 400 with an invalid password', async () => {
    (User.findOne as jest.Mock).mockResolvedValue({
      id: '123',
      email: 'test@test.com',
      password: 'hashedpassword'
    });

    (Password.compare as jest.Mock).mockResolvedValue(false);

    await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'wrongpassword'
      })
      .expect(400);
  });

  it('responds with a cookie when given valid credentials', async () => {
    (User.findOne as jest.Mock).mockResolvedValue({
      id: '123',
      email: 'test@test.com',
      password: 'hashedpassword'
    });

    (Password.compare as jest.Mock).mockResolvedValue(true);

    const response = await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
  });
});
