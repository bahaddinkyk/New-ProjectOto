const request = require('supertest');
const app = require('../src/app'); // Express app'inizi buraya dahil edin

describe('User Routes', () => {
  it('should return a 200 status code', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
  });
});
