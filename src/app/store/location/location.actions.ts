import { createAction, props } from '@ngrx/store';

export const setUserCountry = createAction(
  '[Location] Set User Country',
  props<{ country: string }>()
);

export const detectUserLocation = createAction(
  '[Location] Detect Location'); // New action
