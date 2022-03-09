import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] LogOut',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
}
export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = Login | LogOut;
