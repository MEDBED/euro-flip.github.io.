import { createAction, props } from '@ngrx/store';

export const setExchangeRate = createAction(
  '[Currency] Set Exchange Rate',
  props<{ rate: number }>()
);
