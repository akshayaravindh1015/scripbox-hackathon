import { Action, createReducer, on } from '@ngrx/store';

import { Auth } from '@shared/models';
import { login, logOut } from '.';

export const authFeatureKey = 'auth';

export const initialState: Auth = {
  isLoggedIn: true,
  empData: {
    empId: '543265',
    myChallenges: [],
    votedChallenges: [],
  },
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({
    ...state,
    isLoggedIn: true,
    empData: { ...state.empData, ...action.empData },
  })),
  on(logOut, (state) => initialState)
);

/*
export function authReducer(state = initialState, action: Action): Auth {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
*/
