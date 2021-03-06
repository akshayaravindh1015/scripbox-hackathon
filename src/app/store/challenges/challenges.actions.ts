import { createAction, props } from '@ngrx/store';
import { Challenge, Comment } from '@shared/models';

export const loadChallenges = createAction(
  '[Challenges] Load Challengess',
  props<{ challenges: Challenge[] }>()
);

export const addChallenge = createAction(
  '[Challenges] Add a Challenge',
  props<{ challenge: Challenge }>()
);

export const addUpVotedUser = createAction(
  '[Challenges] Add Voted User',
  props<{ challengeId: string; empId: string }>()
);

export const addDownVotedUser = createAction(
  '[Challenges] Add DownVoted User',
  props<{ challengeId: string; empId: string }>()
);

export const addComment = createAction(
  '[Challenges] Add Comments to challenge',
  props<{ challengeId: string; comment: Comment }>()
);

export const resetChallenges = createAction('[Challenges] Reset Challenges');
