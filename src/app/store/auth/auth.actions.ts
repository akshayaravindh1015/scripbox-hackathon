import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{
    empData: {
      empId: string;
      myChallenges: string[];
      votedChallenges: string[];
    };
  }>()
);

export const logOut = createAction('[Auth] LogOut');
