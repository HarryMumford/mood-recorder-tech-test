import app from '../src/application';
import * as request from 'supertest';
import 'jest';

describe('GET / concernEvents', () => {
  it('return an array of concern events', async () => {
    await request(app)
      .get('/concernEvents')
      .expect(200)
      .expect(function(res) {
        const keys = Object.keys(res.body[0]);
        expect(keys).toEqual(['timestamp', 'severity', 'observer']);
        expect(res.body.length).toEqual(8);
      });
  });
});
