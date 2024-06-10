const request = require('supertest');
const app = require('./app');
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
});

afterAll((done) => {
    server.close(done);
});

describe('/ endpoint', () => {
    test("Debe contener 'Home Page'", async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Home Page');
    });
});
