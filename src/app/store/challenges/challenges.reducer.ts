import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { Challenge } from '@shared/models';
import {
  addChallenge,
  addDownVotedUser,
  addUpVotedUser,
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
  on(addUpVotedUser, (state, action) => {
    const challIndex = state.challenges.findIndex(
      (el) => el.id == action.challengeId
    );
    const newChallenge: Challenge = { ...state.challenges[challIndex] };
    newChallenge.upVotedBy.push(action.empId);
    if (newChallenge.downVotedBy.includes(action.empId)) {
      newChallenge.downVotedBy = newChallenge.downVotedBy.filter(
        (el) => el == action.empId
      );
    }

    return {
      ...state,
      challenges: state.challenges.map((challenge, index) => {
        if (index === challIndex) {
          return newChallenge;
        }
        return challenge;
      }),
    };
  }),
  on(addDownVotedUser, (state, action) => {
    const challIndex = state.challenges.findIndex(
      (el) => el.id == action.challengeId
    );
    const newChallenge: Challenge = { ...state.challenges[challIndex] };
    newChallenge.downVotedBy.push(action.empId);
    if (newChallenge.upVotedBy.includes(action.empId)) {
      newChallenge.upVotedBy = newChallenge.upVotedBy.filter(
        (el) => el == action.empId
      );
    }

    return {
      ...state,
      challenges: state.challenges.map((challenge, index) => {
        if (index === challIndex) {
          return newChallenge;
        }
        return challenge;
      }),
    };
  }),
  on(resetChallenges, () => initialChallengeState)
);
