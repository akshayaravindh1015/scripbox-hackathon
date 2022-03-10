import * as fromChallenges from './challenges.actions';

describe('loadChallengess', () => {
  it('should return an action', () => {
    expect(fromChallenges.loadChallengess().type).toBe('[Challenges] Load Challengess');
  });
});
