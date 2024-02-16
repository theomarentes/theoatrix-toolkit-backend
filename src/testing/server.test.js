
const request = require('supertest');


var {app} = require('../server');

describe('check if home route can be reached', () => {
	it("server / route can be reached", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toEqual(200);
	});
});


describe('check if databasehealth can be reached', () => {
	it("route can be reached", async () => {
		const res = await request(app).get('/databaseHealth');
		expect(res.statusCode).toEqual(200);
	});
});