import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '.';

export const isLoggedIn = (state: AppState) => state.auth.isLoggedIn;

export const empDataSelector = (state: AppState) => state.auth.empData;
export const empIdSelector = createSelector(
  empDataSelector,
  (data) => data.empId
);
