import supertest from 'supertest';
import {app, server} from '../index';
const request = supertest(app);

afterAll(() => {
  server.close();
});

describe('Test endpoint responses', () => {
  it('gets the / endpoint', async (done: DoneFn) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      response: 'ok',
      status: 200,
      routes: [
        {
          metod: 'GET',
          path: '/api/',
          description: 'Get all posible requests',
        },
      ],
    });
    done();
  });
});
