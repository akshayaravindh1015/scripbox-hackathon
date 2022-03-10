import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { authReducer } from './auth';
import { Auth } from '@shared/models';
import { challengeReducer, ChallengesState } from './challenges';
import { environment } from '../../environments/environment';

export interface AppState {
  auth: Auth;
  challenges: ChallengesState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  challenges: challengeReducer,
};

export * from './global.selectors';
export * from './test-store';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
