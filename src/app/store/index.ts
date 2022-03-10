import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { empAuthReducer } from './emp-auth';
import { Employee_Auth } from '@shared/models';
import { challengeReducer, ChallengesState } from './challenges';
import { environment } from '../../environments/environment';

export interface AppState {
  empAuth: Employee_Auth;
  challenges: ChallengesState;
}

export const reducers: ActionReducerMap<AppState> = {
  empAuth: empAuthReducer,
  challenges: challengeReducer,
};

export * from './global.selectors';
export * from './test-store';

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
