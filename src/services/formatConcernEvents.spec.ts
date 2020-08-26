import { formatConcernEvents } from './formatConcernEvents';

const TextRow = {
  payload: {
    severity: 'HIGH',
    timestamp: '2019-05-03T16:03:10+01:00'
  }
};

const fakeConcernEvents = [[TextRow], ['metadata']];

describe('formatConcernEvents', () => {
  it('returns the correctly formatted data', () => {
    expect(formatConcernEvents(fakeConcernEvents)).toEqual([
      {
        observer: 'John Doe',
        severity: 'HIGH',
        timestamp: '2019-05-03T16:03:10+01:00'
      }
    ]);
  });
});
