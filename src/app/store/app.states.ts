import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';
import { Sport } from '../store/model/user';

export interface AppState {
  authState: auth.State;
  sport: auth.State;
}

export const reducers = {
    auth: auth.reducer,
    sport: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectSportState = createFeatureSelector<AppState>('auth');

export default class SportState {
  Sport: Array<Sport>;
}

export const initializeState = (): SportState => {
  return { Sport: Array<Sport>() };
};
