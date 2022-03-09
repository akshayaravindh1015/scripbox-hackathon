import * as fromDummy from './dummy.actions';

describe('loadDummys', () => {
  it('should return an action', () => {
    expect(fromDummy.loadDummys().type).toBe('[Dummy] Load Dummys');
  });
});
