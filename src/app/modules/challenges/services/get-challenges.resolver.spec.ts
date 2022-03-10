import { TestBed } from '@angular/core/testing';

import { GetChallengesResolver } from './get-challenges.resolver';

describe('GetChallengesResolver', () => {
  let resolver: GetChallengesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetChallengesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
