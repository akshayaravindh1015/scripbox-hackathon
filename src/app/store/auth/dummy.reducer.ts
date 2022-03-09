import { Action, createReducer, on } from '@ngrx/store';


export const dummyFeatureKey = 'dummy';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

);
