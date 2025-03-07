import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LocationState } from './location.reducer';

export const selectLocationState = createFeatureSelector<LocationState>('location');

export const getUserCountry = createSelector(
  selectLocationState,
  (state: LocationState) => state.userCountry
);
