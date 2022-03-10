import { createReducer, on } from '@ngrx/store';
import { Challenge } from '@shared/models';
import {
  addChallenge,
  loadChallenges,
  resetChallenges,
} from './challenges.actions';

export const challengesFeatureKey = 'challenges';

export interface ChallengesState {
  challenges: Challenge[];
}

export const initialChallengeState: ChallengesState = {
  challenges: [],
};

export const challengeReducer = createReducer(
  initialChallengeState,
  on(loadChallenges, (state, action) => ({
    ...state,
    challenges: action.challenges,
  })),
  on(addChallenge, (state, action) => ({
    ...state,
    challenges: [...state.challenges, action.challenge],
  })),
  on(resetChallenges, () => initialChallengeState)
);
