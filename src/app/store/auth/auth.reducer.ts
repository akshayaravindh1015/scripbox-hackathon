import { createReducer, on } from '@ngrx/store';

import { Auth } from '@shared/models';
import { login, logOut } from '.';
import {
  addToMyBookMarkedChallenges,
  addToMyCreatedChallenges,
  addToMyDownVotedChallenges,
  addToMyUpVotedChallenges,
  removeFromMyBookMarkedChallenges,
} from './auth.actions';

export const authFeatureKey = 'auth';

export const initialState: Auth = {
  isLoggedIn: true,
  empData: {
    empId: '12345',
    myChallenges: [],
    votedChallenges: [],
    bookMarkedChallenges: [],
    downVotedChllenges: [],
  },
};

export const authReducer = createReducer(
  initialState,
  on(login, (state, action) => ({
    ...state,
    isLoggedIn: true,
    empData: { ...state.empData, ...action.empData },
  })),
  on(logOut, () => initialState),
  on(addToMyCreatedChallenges, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      myChallenges: [...state.empData.myChallenges, action.id],
    },
  })),
  on(addToMyUpVotedChallenges, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      votedChallenges: [...state.empData.votedChallenges, action.id],
      downVotedChllenges: state.empData.downVotedChllenges.filter(
        (id) => id != action.id
      ),
    },
  })),
  on(addToMyDownVotedChallenges, (state, action) => ({
    ...state,
    empData: {
      ...state.empData,
      downVotedChllenges: [...state.empData.downVotedChllenges, action.id],
      votedChallenges: state.empData.votedChallenges.filter(
        (id) => id != action.id
      ),
    },
  })),
  on(addToMyBookMarkedChallenges, (state, action) => ({
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
*/
