import { moodCount } from './moodCount';

const TextRow1 = {
  payload: {
    mood: 'happy'
  }
};

const TextRow2 = {
  payload: {
    mood: 'sad'
  }
};

const fakeConcernEvents = [[TextRow1, TextRow2], ['metadata']];

describe('moodCount', () => {
  it('returns the correctly formatted data', () => {
    expect(moodCount(fakeConcernEvents)).toEqual({ happy: 50, sad: 50 });
  });
});
