/* const request = require('supertest');
const express = require('express');
const UserRoutes = require('../controllers/UserRoutes'); 

const app = express();
app.use(express.json());
app.use('/user', UserRoutes); 

describe('POST /api/sign-up', () => {
    it('should create a new user and return a JWT token', async () => {
      const userData = {
        email: 'test@example.com',
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
        email: 'existing@example.com',
        password: 'password123'
      };
  
      const response = await request(app)
        .post('/user/sign-up')
        .send(userData);
  
      expect(response.statusCode).toBe(409);
      
    });
  });
  
  describe('POST /api/sign-in', () => {
    it('should sign in an existing user and return a JWT token', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123'
      };
  
      const response = await request(app)
        .post('/user/sign-in')
        .send(userData);
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token');
    });
  
    it('should return 401 for incorrect password', async () => {
      const userData = {
        email: 'existing@example.com',
        password: 'wrongPassword'
      };
  
      const response = await request(app)
        .post('/user/sign-in')
        .send(userData);
  
      expect(response.statusCode).toBe(401);
    });
  });
   */