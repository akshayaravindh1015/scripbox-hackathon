import { Action } from '@ngrx/store';

import { Auth } from '@shared/models';
import { AuthActionTypes } from '.';

export const authFeatureKey = 'auth';

export const initialState: Auth = {
  isLoggedIn: false,
};

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
