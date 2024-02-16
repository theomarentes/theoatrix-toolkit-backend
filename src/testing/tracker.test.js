const request = require('supertest');
const express = require('express');
const router = require('../controllers/UserRoutes'); // Adjust the path to where your router is located


const app = express();
app.use(express.json());
app.use('/tracker', router); // Assuming your routes are prefixed with '/tracker'

describe('Tracker API', () => {
  describe('GET /tracker/1', () => {
    it('should return all tracker details', async () => {
      const res = await request(app).get('https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com//tracker/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('trackerDetails');
      // Add more expectations as needed
    });
  });

  describe('GET /tracker/:rsn', () => {
    it('should return tracker data for a given RSN', async () => {
      const rsn = 'testPlayer';
      const res = await request(app).get(`/tracker/${rsn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('data');
      // Add more expectations as needed
    });
  });

  describe('POST /tracker/:rsn', () => {
    it('should update and return tracker data for a given RSN', async () => {
      const rsn = 'testPlayer';
      const res = await request(app).post(`/tracker/${rsn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('data');
      // Add more expectations as needed
    });
  });
});
