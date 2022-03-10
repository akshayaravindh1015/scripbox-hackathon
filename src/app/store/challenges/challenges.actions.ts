import { createAction, props } from '@ngrx/store';
import { Challenge } from '@shared/models';

export const loadChallenges = createAction(
  '[Challenges] Load Challengess',
  props<{ challenges: Challenge[] }>()
);

export const addChallenge = createAction(
  '[Challenges] Add a Challenge',
  props<{ challenge: Challenge }>()
);

export const resetChallenges = createAction('[Challenges] Reset Challenges');
