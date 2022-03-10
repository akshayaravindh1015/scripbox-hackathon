import { createSelector } from '@ngrx/store';
import { AppState } from '.';

//Auth
export const isLoggedIn = (state: AppState) => state.empAuth.isLoggedIn;

//Employee Details
export const empData$ = (state: AppState) => state.empAuth.empData;
export const empId$ = createSelector(empData$, (data) => data.empId);

//Challenges
export const challenegsList$ = (state: AppState) => state.challenges.challenges;
export const challenge$ = (id: string) =>
  createSelector(challenegsList$, (challenges) =>
    challenges.find((el) => el.id == id)
  );
