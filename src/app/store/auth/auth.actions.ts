import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{
    empData: {
      empId: string;
      myChallenges: string[];
      votedChallenges: string[];
      bookMarkedChallenges: string[];
      downVotedChllenges: string[];
    };
  }>()
);

export const logOut = createAction('[Auth] LogOut');

export const addToMyCreatedChallenges = createAction(
  '[Auth] Add To My Created Challenged',
  props<{ id: string }>()
);
export const addToMyUpVotedChallenges = createAction(
  '[Auth] Add To My UpVoted Challenged',
  props<{ id: string }>()
);
export const addToMyDownVotedChallenges = createAction(
  '[Auth] Add To My DownVoted Challenged',
  props<{ id: string }>()
);
export const addToMyBookMarkedChallenges = createAction(
  '[Auth] Add To My BookMarked Challenged',
  props<{ id: string }>()
);
export const removeFromMyBookMarkedChallenges = createAction(
  '[Auth] Add To My BookMarked Challenged',
  props<{ id: string }>()
);
