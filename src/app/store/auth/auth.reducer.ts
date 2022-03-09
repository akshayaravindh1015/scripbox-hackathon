import { Action, createReducer, on } from '@ngrx/store';

import { Auth } from '@shared/models';
import { login, logOut } from '.';

export const authFeatureKey = 'auth';

export const initialState: Auth = {
  isLoggedIn: false,
  empId: '',
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({
    ...state,
    isLoggedIn: true,
    empId: action.empId,
  })),
  on(logOut, (state) => ({ ...state, isLoggedIn: false, empId: '' }))
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
