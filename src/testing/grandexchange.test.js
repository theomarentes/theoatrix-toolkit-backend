const request = require('supertest');


describe('grand exchange api', () => {
  describe('test item id 4151 on grand exchange route', () => {
    it('should return data about abyssal whip', async () => {
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com")
      .get('/ge/item/4151');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('item');
      expect(res.body.item.name).toBe("Abyssal whip");
     
    });
  });

  describe('test item name "bronze dagger" on grand exchange route', () => {
    it('should return data about bronze dagger', async () => {
      const res = await request("https://theoatrix-toolkit-backend-139a9c3c7d4b.herokuapp.com")
      .get('/ge/item/bronze dagger');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('item');
      expect(res.body.item.name).toBe("Bronze dagger");
     
    });
  });


});
