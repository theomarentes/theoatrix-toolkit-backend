const request = require('supertest');


describe('simulator API', () => {
  describe('test vorkath in monsters route', () => {
    it('should return data about vorkath', async () => {
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com")
      .get('/simulator/vorkath');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('monster');
     
    });
  });


});
