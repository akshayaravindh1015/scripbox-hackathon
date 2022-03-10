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
export const addToMyUpVotedChallenges = createAction(
  '[Emp-Auth] Add To My UpVoted Challenged',
  props<{ id: string }>()
);
export const addToMyDownVotedChallenges = createAction(
  '[Emp-Auth] Add To My DownVoted Challenged',
  props<{ id: string }>()
);
export const addToMyBookMarkedChallenges = createAction(
  '[Emp-Auth] Add To My BookMarked Challenged',
  props<{ id: string }>()
);
export const removeFromMyBookMarkedChallenges = createAction(
  '[Emp-Auth] Add To My BookMarked Challenged',
  props<{ id: string }>()
);
