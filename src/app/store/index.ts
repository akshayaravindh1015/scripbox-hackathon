import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { authReducer } from './auth';
import { Auth } from '@shared/models';
import { environment } from '../../environments/environment';

export interface AppState {
  auth: Auth;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export * from './global.selectors';
export * from './test-store';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
