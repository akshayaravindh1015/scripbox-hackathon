import { createReducer, on } from '@ngrx/store';

import { Employee_Auth } from '@shared/models';
import { login, logOut } from '.';
import {
  bookMarkChallenge,
  addToMyCreatedChallenges,
  downVoteChallenge,
  upVoteChallenge,
  removeFromMyBookMarkedChallenges,
} from './emp-auth.actions';

export const empAuthFeatureKey = 'emp-auth';

export const initialEmpAuthState: Employee_Auth = {
  isLoggedIn: false,
  empData: {
    empId: '',
    myChallenges: [],
    votedChallenges: [],
    bookMarkedChallenges: [],
    downVotedChllenges: [],
  },
};

export const empAuthReducer = createReducer(
  initialEmpAuthState,
  on(login, (state, action) => ({
    ...state,
    isLoggedIn: true,
    empData: { ...state.empData, ...action.empData },
  })),
  on(logOut, () => initialEmpAuthState),
  on(addToMyCreatedChallenges, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      myChallenges: [...state.empData.myChallenges, action.id],
    },
  })),
  on(upVoteChallenge, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      votedChallenges: [...state.empData.votedChallenges, action.challengeId],
      downVotedChllenges: state.empData.downVotedChllenges.filter(
        (id) => id != action.challengeId
      ),
    },
  })),
  on(downVoteChallenge, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      downVotedChllenges: [
        ...state.empData.downVotedChllenges,
        action.challengeId,
      ],
      votedChallenges: state.empData.votedChallenges.filter(
        (id) => id != action.challengeId
      ),
    },
  })),
  on(bookMarkChallenge, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      bookMarkedChallenges: [...state.empData.bookMarkedChallenges, action.id],
    },
  })),
  on(removeFromMyBookMarkedChallenges, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      bookMarkedChallenges: state.empData.bookMarkedChallenges.filter(
        (id) => id != action.id
      ),
    },
  }))
);

/*
export function authReducer(state = initialState, action: Action): Auth {
  switch (action.type) {
    case EmpAuthActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case EmpAuthActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
*/
