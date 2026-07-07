import request from 'supertest';
import { App } from './app';

const appInstance = new App().app;

describe('Main Tests', () => {

    it('should check if server is running', async () => {
        const response = await request(appInstance).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ok: true});
    })

    it("should check if it creates a user", async () => {
        const response = await request(appInstance)
        .post('/user')
        .send({
            name: "Giliarde",
            email: "g@test.com.br"
        })

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    })

    it("should check if it returns all user", async() => {
        const response = await request(appInstance).get('/user');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
})