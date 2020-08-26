import app from '../src/application';
import * as request from 'supertest';
import 'jest';

describe('GET / concernEvents', () => {
  it('return an array of concern events', async () => {
    await request(app)
      .get('/moods')
      .expect(200)
      .expect(function(res) {
        const keys = Object.keys(res.body);
        expect(keys).toEqual(['sad', 'happy', 'okay']);
      });
  });
});
