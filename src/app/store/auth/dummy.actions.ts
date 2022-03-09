import { createAction, props } from '@ngrx/store';

export const loadDummys = createAction(
  '[Dummy] Load Dummys'
);

export const loadDummysSuccess = createAction(
  '[Dummy] Load Dummys Success',
  props<{ data: any }>()
);

export const loadDummysFailure = createAction(
  '[Dummy] Load Dummys Failure',
  props<{ error: any }>()
);
