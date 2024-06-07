// signin.test.ts

import request from 'supertest';
import { app } from '../index'; // Assuming you have an app.ts file that sets up the express app
import {describe, expect, test, jest, it} from '@jest/globals';

jest.mock('../models/user');
jest.mock('../../services/password');

global.signin = async () => {
  const email = 'test@test.com';
  const password = 'password';

  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email,
      password,
    })
    .expect(201);

  const cookie = response.get('Set-Cookie');

  return cookie;
};