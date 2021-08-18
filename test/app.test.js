const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);


describe('Test for NodeJS-Sample App', () => {
    it('Test the app status', async () => {
        const res = await request.get('/')

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('success');
    });


    it('Test the loading of index.ejs page', async () => {
        const res = await request.get('/')

        expect(res.status).toBe(200);
    });
});