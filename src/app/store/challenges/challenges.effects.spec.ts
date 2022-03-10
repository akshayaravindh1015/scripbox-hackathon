import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ChallengesEffects } from './challenges.effects';

describe('ChallengesEffects', () => {
  let actions$: Observable<any>;
  let effects: ChallengesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChallengesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ChallengesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
