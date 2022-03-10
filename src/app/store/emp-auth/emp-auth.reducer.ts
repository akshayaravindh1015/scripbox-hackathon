import { createReducer, on } from '@ngrx/store';

import { Employee_Auth } from '@shared/models';
import { login, logOut } from '.';
import {
  addToMyBookMarkedChallenges,
  addToMyCreatedChallenges,
  addToMyDownVotedChallenges,
  addToMyUpVotedChallenges,
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
