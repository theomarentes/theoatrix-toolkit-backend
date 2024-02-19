const request = require('supertest');
const express = require('express');
const router = require('../controllers/UserRoutes');


const app = express();
app.use(express.json());
app.use('/tracker', router); 

describe('Tracker API', () => {
  describe('GET /tracker/1', () => {
    it('should return all tracker details', async () => {
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com").get('/tracker/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('trackerDetails');
    });
  });

  describe('GET /tracker/:rsn', () => {
    it('should return tracker data for a given RSN', async () => {
      const rsn = 'testPlayer';
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com").get(`/tracker/${rsn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('data');
 
    });
  });

  describe('POST /tracker/:rsn', () => {
    it('should update and return tracker data for a given RSN', async () => {
      const rsn = 'testPlayer';
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com").get(`/tracker/${rsn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('data');
    
    });
  });
});
