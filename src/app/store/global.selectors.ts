import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '.';

export const isLoggedIn = (state: AppState) => state.auth.isLoggedIn;
