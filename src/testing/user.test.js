const request = require('supertest');
const express = require('express');
const UserRoutes = require('../controllers/UserRoutes');

const app = "https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com"

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

describe('POST /user/sign-up', () => {
  it('should create a new user and return a JWT token', async () => {
    const userData = {
      email: generateString(6) + '@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/user/sign-up')
      .send(userData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
  
  it('should return 409 if user already exists', async () => {
    const userData = {
      email: 'test4@example.com',
      password: 'password123'
    };

    // First request to create the user
    await request(app).post('/user/sign-up').send(userData);

    // Second request should detect duplicate user
    const response = await request(app)
      .post('/user/sign-up')
      .send(userData);
      
    expect(response.statusCode).toBe(409);
  });
});

describe('POST /user/sign-in', () => {
  it('should sign in an existing user and return a JWT token', async () => {
    const userData = {
      email: 'test4@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/user/sign-in')
      .send(userData);

    expect(response.body).toHaveProperty('token');
  });

  it('should return 401 for incorrect password', async () => {
    const userData = {
      email: 'test4@example.com',
      password: 'wrongPassword'
    };

    const response = await request(app)
      .post('/user/sign-in')
      .send(userData);

    expect(response.statusCode).toBe(401);
  });
});
