import { createSelector, props } from '@ngrx/store';
import { AppState } from '.';

//Auth
export const isLoggedIn = (state: AppState) => state.auth.isLoggedIn;

//Employee Details
export const empData$ = (state: AppState) => state.auth.empData;
export const empId$ = createSelector(empData$, (data) => data.empId);

//Challenges
export const challenegsList$ = (state: AppState) => state.challenges.challenges;
export const challenge$ = (id: string) =>
  createSelector(challenegsList$, (challenges) =>
    challenges.find((el) => el.id == id)
  );
