import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ empId: string }>());

export const logOut = createAction('[Auth] LogOut');
