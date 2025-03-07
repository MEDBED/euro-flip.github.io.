import { createReducer, on } from '@ngrx/store';
import { setUserCountry } from './location.actions';

export interface LocationState {
  userCountry: string;
}

const initialState: LocationState = {
  userCountry: 'france'  // Default country
};

export const locationReducer = createReducer(
  initialState,
  on(setUserCountry, (state, { country }) => ({ ...state, userCountry: country }))
);
