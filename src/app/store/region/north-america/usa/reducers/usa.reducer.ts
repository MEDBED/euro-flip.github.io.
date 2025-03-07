import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const usaFeatureKey = 'usa'; // Feature Key for Lazy Loading

export interface UsaState {
  currencyRate: number;
}

const initialState: UsaState = {
  currencyRate: 0.8 // Default rate
};

// Actions
export const setUsaCurrencyRate = createAction(
  '[USA] Set Currency Rate',
  props<{ rate: number }>()
);

// Reducer
export const usaReducer = createReducer(
  initialState,
  on(setUsaCurrencyRate, (state, { rate }) => ({ ...state, currencyRate: rate }))
);
