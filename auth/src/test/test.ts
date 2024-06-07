// signin.test.ts

import request from 'supertest';
import { User } from '../models/user';
import { Password } from '../../services/password';
import {describe, expect, test, jest, it} from '@jest/globals';

jest.mock('../models/user');
jest.mock('../../services/password');

describe('POST /api/users/signin', () => {
  it('returns a 200 on successful signin', async () => {
    // Mocking the user and password comparison
    const mockUser = {
      id: '123',
      email: 'test@test.com',
      password: 'hashedpassword',
    };

    (User.findOne as jest.Mock).mockResolvedValue(mockUser);
    (Password.compare as jest.Mock).mockResolvedValue(true);

    // Mocking JWT
    process.env.JWT_KEY = 'testjwtkey';

    const response = await request(app)
      .post('/api/users/signin')
      .send({
        email: 'test@test.com',
        password: 'password', 
      })
      .expect(200);

    expect(response.body.email).toEqual('test@test.com');
  });
});
