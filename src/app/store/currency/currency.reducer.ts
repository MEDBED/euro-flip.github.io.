import { createReducer, on } from '@ngrx/store';
import { setExchangeRate } from './currency.actions';

export interface CurrencyState {
  exchangeRate: number;
}

const initialState: CurrencyState = {
  exchangeRate: 1.1 // Default exchange rate
};

export const currencyReducer = createReducer(
  initialState,
  on(setExchangeRate, (state, { rate }) => ({ ...state, exchangeRate: rate }))
);
