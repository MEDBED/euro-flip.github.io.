import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const franceFeatureKey = 'france'; // Feature Key for Lazy Loading

export interface FranceState {
  currencyRate: number;
}

const initialState: FranceState = {
  currencyRate: 1.1 // Default rate
};

// Actions
export const setFranceCurrencyRate = createAction(
  '[FRANCE] Set Currency Rate',
  props<{ rate: number }>()
);

// Reducer
export const franceReducer = createReducer(
  initialState,
  on(setFranceCurrencyRate, (state, { rate }) => ({ ...state, currencyRate: rate }))
);
