import { createAction, props } from '@ngrx/store';
import { EmpData } from '@shared/models';

export const login = createAction(
  '[Emp-Auth] Login',
  props<{
    empData: EmpData;
  }>()
);

export const logOut = createAction('[Emp-Auth] LogOut');

export const addToMyCreatedChallenges = createAction(
  '[Emp-Auth] Add To My Created Challenged',
  props<{ id: string }>()
);
export const upVoteChallenge = createAction(
  '[Emp-Auth] Add To My UpVoted Challenged',
  props<{ challengeId: string; empId: string }>()
);
export const downVoteChallenge = createAction(
  '[Emp-Auth] Add To My DownVoted Challenged',
  props<{ challengeId: string; empId: string }>()
);
export const bookMarkChallenge = createAction(
  '[Emp-Auth] Add To My BookMarked Challenged',
  props<{ challengeId: string }>()
);
export const unBookMarkChallenge = createAction(
  '[Emp-Auth] Remove From My BookMarked Challenged',
  props<{ challengeId: string }>()
);
