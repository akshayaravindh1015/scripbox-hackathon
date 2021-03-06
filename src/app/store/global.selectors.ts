import { createSelector } from '@ngrx/store';
import { AppState } from '.';

//Auth
export const isLoggedIn$ = (state: AppState) => state.empAuth.isLoggedIn;

//Employee Details
export const empData$ = (state: AppState) => state.empAuth.empData;
export const empId$ = createSelector(empData$, (data) => data.empId);

//Challenges
export const challenegsList$ = (state: AppState) => state.challenges.challenges;
export const myChallengesIds$ = createSelector(
  empId$,
  challenegsList$,
  (empId, challenges) => {
    return challenges.filter((el) => el.empId === empId).map((el) => el.id);
  }
);
export const challenge$ = (id: string) =>
  createSelector(challenegsList$, (challenges) => {
    const index = challenges.findIndex((el) => el.id == id);
    return challenges[index];
  });
export const isChallengeUpVoted$ = (id: string) =>
  createSelector(empData$, (empData) => empData.votedChallenges.includes(id));
export const isChallengeDownVoted$ = (id: string) =>
  createSelector(empData$, (empData) =>
    empData.downVotedChllenges.includes(id)
  );
export const isChallengeBookMarked$ = (id: string) =>
  createSelector(empData$, (empData) =>
    empData.bookMarkedChallenges.includes(id)
  );
